export function getLibUrl() {
  const viewflyCode: Record<string, string> = process.env.SOURCE_CODE as any || {}
  const coreURL = URL.createObjectURL(new Blob([viewflyCode.core], { type: 'application/javascript' }))
  const runtimeURL = URL.createObjectURL(new Blob([viewflyCode.runtime], { type: 'application/javascript' }))
  const browserURL = URL.createObjectURL(new Blob([viewflyCode.platformBrowser], { type: 'application/javascript' }))
  const reflectMetadataURL = URL.createObjectURL(new Blob([viewflyCode.reflectMetadata], { type: 'application/javascript' }))

  return {
    coreURL,
    runtimeURL,
    browserURL,
    reflectMetadataURL
  }
}
