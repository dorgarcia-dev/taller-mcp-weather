# Taller MCP Weather

## Descripción

Este es un proyecto auxiliar diseñado para aprender a crear un servidor MCP (Model Context Protocol) en una jornada de formación. Se trata de un ejemplo práctico y didáctico que implementa un servidor MCP con funcionalidad básica de consulta meteorológica.

## ¿Qué es MCP?

Model Context Protocol (MCP) es un protocolo que permite a los modelos de lenguaje interactuar con herramientas y servicios externos de forma estandarizada. Este proyecto sirve como introducción práctica a la creación de servidores MCP.

## Funcionalidad

El servidor implementa una herramienta llamada `fetch-weather` que permite:

- Consultar el clima actual de cualquier ciudad del mundo
- Obtener información meteorológica detallada incluyendo:
  - Temperatura actual
  - Precipitación
  - Previsión horaria
  - Información sobre si es de día o de noche

La herramienta utiliza la API gratuita de [Open-Meteo](https://open-meteo.com/) para obtener datos meteorológicos precisos.

## Estructura del Proyecto

```
taller-mcp-weather/
├── main.ts          # Implementación del servidor MCP
├── package.json     # Configuración y dependencias
└── README.md        # Este archivo
```

## Tecnologías Utilizadas

- **TypeScript**: Lenguaje de programación
- **@modelcontextprotocol/sdk**: SDK oficial para crear servidores MCP
- **Zod**: Validación de esquemas y tipos
- **Open-Meteo API**: Servicio de datos meteorológicos

## Requisitos Previos

> **Nota para principiantes**: No te preocupes si no sabes qué son estas herramientas. Son programas que necesitas instalar en tu ordenador antes de empezar. Es como cuando necesitas tener Microsoft Word instalado para abrir un documento .docx.

Antes de comenzar, necesitas tener instalado en tu ordenador:

1. **Git**: Programa que permite descargar y gestionar código
   - Descarga desde: https://git-scm.com/downloads
   - Sigue el instalador con las opciones por defecto

2. **Node.js** (versión 18 o superior): Permite ejecutar código JavaScript/TypeScript
   - Descarga desde: https://nodejs.org/
   - Elige la versión "LTS" (recomendada)
   - Sigue el instalador con las opciones por defecto

3. **Terminal o Línea de Comandos**:
   - En **Windows**: Usa "Git Bash" (se instala con Git) o "PowerShell"
   - En **Mac**: Usa "Terminal" (ya viene instalado)
   - En **Linux**: Usa tu terminal habitual

## Instalación y Configuración

### Paso 1: Descargar el Proyecto

> **¿Qué vamos a hacer?** Vamos a descargar el código del proyecto desde Internet a tu ordenador.

Abre tu terminal o línea de comandos y ejecuta:

```bash
git clone https://github.com/dorgarcia-dev/taller-mcp-weather.git
```

### Paso 2: Entrar en la Carpeta del Proyecto

> **¿Qué es esto?** El comando `cd` significa "cambiar de directorio" (change directory). Es como hacer doble clic en una carpeta, pero usando comandos de texto.

```bash
cd taller-mcp-weather
```

### Paso 3: Elegir la Versión del Proyecto

Este proyecto tiene diferentes versiones (ramas) para facilitar el aprendizaje:

- **mcp-base**: Versión inicial, punto de partida para el taller
- **mcp-final**: Versión completa con todas las funcionalidades implementadas

> **¿Qué son las ramas?** Piensa en las ramas como diferentes versiones del mismo proyecto guardadas en el mismo sitio. Es como tener "Documento_v1.docx" y "Documento_v2.docx", pero más organizado.

**Para comenzar desde cero (recomendado para aprender):**

```bash
git checkout mcp-base
```

**Para ver la versión final completa:**

```bash
git checkout mcp-final
```

> **Truco**: Puedes cambiar entre ramas en cualquier momento repitiendo estos comandos.

### Paso 4: Instalar las Dependencias

> **¿Qué son las dependencias?** Son librerías y herramientas que el proyecto necesita para funcionar. Es como descargar las extensiones necesarias para que un programa funcione correctamente.

```bash
npm install
```

Este comando descargará e instalará todo lo necesario automáticamente. Puede tardar unos minutos.

## Uso

> **Para principiantes**: Este servidor MCP no funciona solo. Necesita un "cliente" que lo utilice, como Claude Desktop, VS Code con Copilot, u otros asistentes de IA compatibles con MCP.

El servidor MCP se comunica a través de stdio (entrada/salida estándar) y está diseñado para ser utilizado por clientes compatibles con MCP.

### Herramienta Disponible

**fetch-weather** (consultar clima)

- **¿Qué hace?**: Obtiene información meteorológica actual de cualquier ciudad del mundo
- **¿Qué necesita?**: El nombre de una ciudad (por ejemplo: "Madrid", "Barcelona", "Valencia")
- **¿Qué devuelve?**: Datos del clima como temperatura, lluvia, previsión horaria, etc.

## Aprendizaje

Este proyecto es ideal para:

- Comprender la estructura básica de un servidor MCP
- Aprender a definir herramientas (tools) en MCP
- Trabajar con validación de esquemas usando Zod
- Integrar APIs externas en un servidor MCP
- Entender el flujo de comunicación mediante stdio

## Autor

Dorkaitz Garcia

## Licencia

ISC
