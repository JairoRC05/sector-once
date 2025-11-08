#!/usr/bin/env ruby
require "yaml"
require "rqrcode"
require "fileutils"

# Rutas
DATA_FILE = "_data/menus.yml"
OUTPUT_DIR = "_includes/qr"

# Crear carpeta si no existe
FileUtils.mkdir_p(OUTPUT_DIR)

# Cargar menús
menus = YAML.load_file(DATA_FILE)

menus.each do |menu|
  puts "Generando QR para: #{menu['name']} (#{menu['id']})"

  # Crear QR
  qr = RQRCode::QRCode.new(menu["url"])

  # Exportar como SVG
  svg_content = qr.as_svg(
    offset: 0,
    color: "000000",
    shape: :square,
    module_size: 5
  )

  # Guardar archivo
  filename = "#{menu['id']}.svg"
  File.write("#{OUTPUT_DIR}/#{filename}", svg_content)
end

puts "\n✅ Todos los códigos QR generados en #{OUTPUT_DIR}/"