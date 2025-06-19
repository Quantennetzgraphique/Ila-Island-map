import os
import pandas as pd
import re

# 操作レイヤー指定
layer_name = "停車場"

# 入出力ファイル指定
folder = os.path.dirname(os.path.abspath(__file__))
input_file = os.path.join(folder, layer_name + ".csv")
output_file = os.path.join(folder, layer_name + ".notion.csv")

# セミコロン区切りでCSVを文字列型に読み込み
df = pd.read_csv(input_file, sep=';', dtype=str, na_filter=False)

# 不要な列を削除
columns_to_remove = [
    'id', 'labeltype', 'labelscale', 'labelx1', 'labely1',
    'labelx2', 'labely2', 'rotation', 'labelx1off', 'labely1off',
    'labelx2off', 'labely2off'
]
df = df.drop(columns=columns_to_remove, errors='ignore')

# 全セルの<>で囲まれた部分と"(信)"と"操車場"を削除する関数
def clean_text(text):
    text = re.sub(r'<[^>]*>', '', str(text))  # <>で囲まれた文字列削除
    text = text.replace("(信)", "")            # "(信)" 削除
    text = text.replace("(郵)", "郵便") 
    text = text.replace("操車場", "")          # "操車場" 削除
    return text

# 全セルに適用
df = df.map(clean_text)

# in-notion列 = 1 の行と加算片を削除
if 'in-notion' in df.columns:
    df = df[df['in-notion'] != '1']
    df = df[df['category'] != '加算片']

# name-haの初めの2文字をzoneの名前にする
df['zone'] = df['name-ha'].str[:2]

# name-haを編集
def modify_name(row):
    name = str(row['name-ha'])
    # labelzone ≠ 0 のとき
    if 'labelzone' in row and pd.notnull(row['labelzone']) and row['labelzone'] != '0':
        if len(name) >= 2:
            name = f"[{name[:2]}]{name[2:]}"
    # categoryを末尾に追加
    name += str(row['category'])
    return name

df['name-ha'] = df.apply(modify_name, axis=1)

# levelを編集
def modify_level(row):
    level = str(row['level'])
    if level == '1':
        level = '一等' + str(row['category'])
    elif level == '2':
        level = '二等' + str(row['category'])
    elif level == '3':
        level = '三等' + str(row['category'])
    elif level == '4':
        level = '四等' + str(row['category'])
    elif level == '5':
        level = '無人' + str(row['category'])
    else:
        level = ''
    return level

df['level'] = df.apply(modify_level, axis=1)

# 不要になった labelzone, in-notion 列を削除
df = df.drop(columns=['labelzone'], errors='ignore')

# 列名変更
rename_dict = {
    'traintype': '停車種別',
    'index': '番号',
    'name-ha': '名前',
    'category': '分類',
    'level': 'レベル（国鉄のみ）',
    'name-ro': 'roman',
    'name-ka': 'かな',
    'zone': '片',
    'etymology': '語源',
    'opened': '開業年'
}
df = df.rename(columns=rename_dict)

# CSV保存（セミコロン区切り）
df.to_csv(output_file, sep=';', index=False, encoding='utf-8-sig')

print("✅ 完全処理完了！ ->", output_file)