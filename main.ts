import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const server = new McpServer({
    name: 'Servidor de taller MCP',
    version: '1.0.0'
});

server.tool(
    'fetch-weather', // título de la herramienta
    'fetch the weather for a given city', // descripción
    {
        city: z.string().describe('City name')
    },
    async ({ city }) => {
        const coordinatesResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
        const coordinatesData = await coordinatesResponse.json();

        if (coordinatesData.length === 0) {
            return {
                content: [
                    {   type: 'text',
                        text: `No se encontró información meteorológica para ${city}.`
                    }
                ]
            };
        }
        const  {latitude, longitude} = coordinatesData.results[0];
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,precipitation,is_day,rain&forecast_days=1`)
        const weatherData = await weatherResponse.json();

        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(weatherData, null, 2)
                }
            ]
        }
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Server started");