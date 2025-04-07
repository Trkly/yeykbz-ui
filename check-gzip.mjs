import { readFile } from 'fs/promises'
import { gzip } from 'zlib'
import { promisify } from 'util'
import { basename } from 'path'

const gzipAsync = promisify(gzip)

async function getGzipSize(filePath) {
  try {
    // 读取文件内容
    const rawData = await readFile(filePath)

    // 执行 Gzip 压缩
    const compressed = await gzipAsync(rawData, { level: 9 })

    // 计算并格式化大小
    const formatKB = bytes => (bytes / 1024).toFixed(2) + ' KB'

    console.log(`
File: ${basename(filePath)}
Raw Size:  ${formatKB(rawData.length)}
Gzip Size: ${formatKB(compressed.length)}
    `)

    return compressed.length

  } catch (error) {
    console.error('Error:', error.message)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
}

// 命令行参数处理
// eslint-disable-next-line no-undef
const [, , filePath] = process.argv
if (!filePath) {
  console.error('Usage: node check-gzip.mjs <file>')
  console.error('(需要 Node.js v14.8.0+ 支持顶层 await)')
  // eslint-disable-next-line no-undef
  process.exit(1)
}

// 执行主函数
await getGzipSize(filePath)