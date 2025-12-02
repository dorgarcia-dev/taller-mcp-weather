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
        return {
            content: [
                {
                    type: 'text',
                    text: `El tiempo en ${city} es soleado.`
                }
            ]
        }
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Server started");