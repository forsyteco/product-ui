import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import packageJson from '../package.json' with {type: 'json'}

const server = new McpServer({
    name: 'Forsyte Product UI',
    version: packageJson.version,
})

export { server }