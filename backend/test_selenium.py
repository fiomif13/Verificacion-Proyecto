import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Configuración del navegador
@pytest.fixture
def driver():
    driver = webdriver.Chrome()  # Cambia a tu navegador preferido
    driver.implicitly_wait(10)
    yield driver
    driver.quit()


# Prueba 1: Registro de usuario
def test_registro_usuario(driver):
    print("Iniciando prueba de registro...")
    driver.get("http://localhost:3000/registrarse")
    
    # Llenar los campos del formulario
    driver.find_element(By.CLASS_NAME, "nombre-completo").send_keys("test_cliente")
    driver.find_element(By.CLASS_NAME, "e-mail").send_keys("test_cliente@example.com")
    driver.find_element(By.CLASS_NAME, "contrasea").send_keys("123456")
    driver.find_element(By.CLASS_NAME, "confirmar-contrasea").send_keys("Test")
    
    # Enviar el formulario
    driver.find_element(By.TAG_NAME, "button").click()
    
    # Capturar mensaje de alerta
    try:
        alert = driver.switch_to.alert
        print(f"Alerta recibida: {alert.text}")
        alert.accept()
    except Exception as e:
        print(f"No se mostró la alerta de confirmación: {e}")
    print("Prueba de registro finalizada.")


# Prueba 2: Simulación de inicio de sesión
def test_simulacion_inicio_sesion(driver):
    print("Iniciando prueba de inicio de sesión...")
    driver.get("http://localhost:3000/iniciar-sesion")
    driver.find_element(By.CLASS_NAME, "correo-electrnico").send_keys("cliente_test1")
    driver.find_element(By.CLASS_NAME, "contrasea").send_keys("12345678")
    driver.find_element(By.CLASS_NAME, "rectangle-2").click()
    current_url = driver.current_url
    print(f"URL actual tras inicio de sesión: {current_url}")
    print("Prueba de inicio de sesión finalizada.")

# Prueba 3: Simulación de exploración de detalles de productos
def test_simulacion_exploracion_detalle(driver):
    print("Iniciando prueba de exploración de detalles de producto...")
    driver.get("http://localhost:3000/detalle-producto/1")  # Cambia el ID según sea necesario
    titulo = driver.find_element(By.CLASS_NAME, "text-wrapper-5").text
    print(f"Título del producto mostrado: {titulo}")
    print("Prueba de exploración de detalles finalizada.")

# Prueba 4: Agregar producto al carrito
def test_agregar_producto_carrito(driver):
    print("Iniciando prueba de agregar al carrito...")
    driver.get("http://localhost:3000/detalle-producto/1")  # Cambiar el ID según los datos disponibles
    
    # Verificar que el botón de agregar al carrito está presente
    try:
        add_to_cart_button = driver.find_element(By.CLASS_NAME, "frame-2")
        add_to_cart_button.click()
        print("Producto agregado al carrito correctamente.")
    except Exception as e:
        print(f"Error al agregar producto al carrito: {e}")
    
    # Validar que el carrito muestra el producto agregado
    try:
        carrito_element = driver.find_element(By.CLASS_NAME, "carrito")
        print("El carrito está visible.")
    except Exception as e:
        print(f"No se encontró el carrito: {e}")
    print("Prueba de agregar al carrito finalizada.")


# Prueba 5: Simulación de revisión de carrito
def test_simulacion_revisar_carrito(driver):
    print("Iniciando prueba de revisión de carrito...")
    driver.get("http://localhost:3000/carrito-compras")
    total = driver.find_element(By.CLASS_NAME, "text-wrapper-11").text
    print(f"Total mostrado en el carrito: {total}")
    print("Prueba de revisión de carrito finalizada.")




# Prueba 6: Simulación de descuento aplicado en carrito
def test_simulacion_descuento(driver):
    print("Iniciando prueba de descuento en carrito...")
    driver.get("http://localhost:3000/carrito-compras")
    descuento = driver.find_element(By.CLASS_NAME, "text-wrapper-9").text
    print(f"Descuento aplicado en el carrito: {descuento}")
    print("Prueba de descuento finalizada.")


# Prueba 7: Simulación de compra exitosa
def test_simulacion_compra_exitosa(driver):
    print("Iniciando prueba de compra exitosa...")

    # Paso 1: Ir directamente a la página de pago
    driver.get("http://localhost:3000/pago-tarjetas")
    
    # Esperar a que cargue la página de pago
    time.sleep(2)  # Ajusta el tiempo si es necesario para que la página cargue

    # Paso 2: Seleccionar el checkbox para pagar con tarjeta (opcional)
    try:
        checkbox = driver.find_element(By.CLASS_NAME, "ellipse")  # Checkbox "Pagar con tarjeta"
        checkbox.click()
        print("Checkbox 'Pagar con tarjeta' seleccionado.")
    except Exception as e:
        print(f"No se encontró el checkbox: {e}")

    # Paso 3: Hacer clic directamente en el enlace a compra-exitosa
    try:
        enlace_compra_exitosa = driver.find_element(By.CSS_SELECTOR, "a.pay[href='/compra-exitosa']")
        driver.execute_script("arguments[0].scrollIntoView(true);", enlace_compra_exitosa)  # Desplazarse al elemento
        enlace_compra_exitosa.click()  # Hacer clic en el enlace
        print("Se hizo clic en el enlace para proceder con la compra exitosa.")
    except Exception as e:
        print(f"Error al intentar hacer clic en el enlace de compra exitosa: {e}")
        return

    # Paso 4: Verificar que la redirección a la página de compra exitosa ocurra
    time.sleep(2)  # Ajusta el tiempo si es necesario para que la página cargue
    current_url = driver.current_url
    print(f"URL actual tras el pago: {current_url}")
    if "compra-exitosa" in current_url:
        print("Redirigido correctamente a la página de compra exitosa.")
    else:
        print("Error: No se redirigió a la página de compra exitosa.")
