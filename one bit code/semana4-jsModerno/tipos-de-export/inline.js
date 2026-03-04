// export nomeado inline
export function inline() {
  console.log('Export nomeado inline')
}

// só pode haver um export default por arquivo
// pode ser nomeado ou anônimo
export default function () {
  console.log('Export default inline')
}
