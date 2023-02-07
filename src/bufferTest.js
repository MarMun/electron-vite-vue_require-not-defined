import { Buffer } from 'buffer'

// placeholder logic
export function getTextLength (text) {
  return Buffer.from(text).length / 1024
}
