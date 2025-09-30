import fs from "fs"
import { CryptoKey, importSPKI } from "jose"
import path from "path"

let publicKey: CryptoKey

export default defineNitroPlugin(async (nitroApp) => {
  publicKey = await loadPublicKey()
})

export function getJwtPublicKey(): CryptoKey {
  return publicKey
}

async function loadPublicKeyFromPath() {
  const runtimeConfig = useRuntimeConfig()
  const filePath = path.join(process.cwd(), runtimeConfig.jwtPublicKeyPath)
  const data = await fs.promises.readFile(filePath, "utf-8")

  return data
  return data
    .replace(/-----BEGIN (.*)-----/g, "")
    .replace(/-----END (.*)-----/g, "")
    .replace(/\s/g, "")
}

async function loadPublicKey() {
  const keyStr = await loadPublicKeyFromPath()
  const key = importSPKI(keyStr, "RS256")

  return key
}
