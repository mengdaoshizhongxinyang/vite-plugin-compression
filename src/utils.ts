export function len<T>(source?: T[] | string | Uint8Array) {
  return source.length
}

// [path][base].ext
export function replaceFileName(staticPath: string, rule: string | ((id: string) => string)) {
  const series = staticPath.split('/')
  const base = series.pop()
  const fileNameTempalte = typeof rule === 'function' ? rule(staticPath) : rule
  let path = series.filter((_, idx) => idx === len(series) - 1).join('/')
  if (len(path)) path = path + '/'
  return fileNameTempalte.replace(/\[path\]/, path).replace(/\[base\]/, base)
}

export function slash(path: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path)
  if (isExtendedLengthPath) return path
  return path.replace(/\\/g, '/')
}
