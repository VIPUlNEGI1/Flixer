// lib/utils.ts
type ClassValue = string | number | boolean | null | undefined | ClassArray | ClassDictionary
interface ClassArray extends Array<ClassValue> {}
interface ClassDictionary { [id: string]: boolean | null | undefined }

export function cn(...classes: ClassValue[]) {
  let result: string[] = []
  
  classes.forEach((cls) => {
    if (!cls) return
    
    if (typeof cls === 'string') {
      result.push(cls)
    } else if (Array.isArray(cls)) {
      result.push(cn(...cls))
    } else if (typeof cls === 'object') {
      for (let key in cls) {
        if (cls[key]) {
          result.push(key)
        }
      }
    }
  })
  
  return result.join(' ')
}