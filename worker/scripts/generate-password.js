// Run: node scripts/generate-password.js "your-chosen-password"
// Copy the printed SALT and HASH into your Worker secrets (see README).
import { randomBytes, pbkdf2Sync } from 'node:crypto'

const password = process.argv[2]
if (!password) {
  console.error('Usage: node scripts/generate-password.js "your-password"')
  process.exit(1)
}

const salt = randomBytes(16).toString('hex')
const hash = pbkdf2Sync(password, Buffer.from(salt, 'hex'), 100000, 32, 'sha256').toString('hex')

console.log('\nADMIN_PASSWORD_SALT =', salt)
console.log('ADMIN_PASSWORD_HASH =', hash)
console.log('\nSet these with:')
console.log(`  wrangler secret put ADMIN_PASSWORD_SALT   (paste: ${salt})`)
console.log(`  wrangler secret put ADMIN_PASSWORD_HASH   (paste: ${hash})`)
