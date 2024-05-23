import pdfplumber # essa biblioteca é usada para extrair texto de arquivos PDF
import re # essa biblioteca é usada para fazer buscas em strings com expressões regulares
import json # essa biblioteca é usada para formatar a saída do script em JSON

def extract_data_from_invoice(pdf_path): # essa função recebe o caminho de um arquivo PDF e retorna um dicionário com os dados extraídos
    with pdfplumber.open(pdf_path) as pdf: # abre o arquivo PDF
        first_page = pdf.pages[0]
        text = first_page.extract_text()

        data = { # dicionário com os dados extraídos
            "client_number": re.search(r'Nº DO CLIENTE: (\d+)', text).group(1), # busca o número do cliente
            "reference_month": re.search(r'Referente a: (\w+/\d+)', text).group(1), # busca o mês de referência
            "energy_consumed_kwh": float(re.search(r'Energia Elétrica \(kWh\): (\d+,\d+)', text).group(1).replace(',', '.')), # busca a energia consumida em kWh
            "energy_consumed_value": float(re.search(r'Energia Elétrica \(R\$\): (\d+,\d+)', text).group(1).replace(',', '.')), # busca o valor da energia consumida
            "sceee_kwh": float(re.search(r'Energia SCEEE s/ICMS \(kWh\): (\d+,\d+)', text).group(1).replace(',', '.')), # busca a energia SCEEE em kWh
            "sceee_value": float(re.search(r'Energia SCEEE s/ICMS \(R\$\): (\d+,\d+)', text).group(1).replace(',', '.')), # busca o valor da energia SCEEE
            "compensated_energy_kwh": float(re.search(r'Energia Compensada GD I \(kWh\): (\d+,\d+)', text).group(1).replace(',', '.')), # busca a energia compensada em kWh
            "compensated_energy_value": float(re.search(r'Energia Compensada GD I \(R\$\): (\d+,\d+)', text).group(1).replace(',', '.')), # busca o valor da energia compensada
            "public_lighting_contribution": float(re.search(r'Contrib Ilum Publica Municipal \(R\$\): (\d+,\d+)', text).group(1).replace(',', '.')) # busca a contribuição de iluminação pública
        }

        return data

if __name__ == "__main__": # se o script for executado diretamente, extrai os dados do arquivo PDF passado como argumento
    import sys
    pdf_path = sys.argv[1]
    data = extract_data_from_invoice(pdf_path)
    print(json.dumps(data, indent=4))
