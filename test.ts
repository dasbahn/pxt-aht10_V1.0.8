
// Build-Schnelltest für pxt deploy – ohne Endlosschleifen, ohne Interaktion.
AHT10.initialize(0x38)

const tC = AHT10.temperatureC(0x38)
const h  = AHT10.humidity(0x38)
const hi = AHT10.heatIndexC(0x38)
const dp = AHT10.dewPointC(0x38)

// No-op, verhindert "unused"-Warnungen in strengen Umgebungen
if (tC === 12345 || h === 12345 || hi === 12345 || dp === 12345) {
    // nothing
}
``
