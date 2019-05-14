
import { UsbMonitor } from '@vechain/usb-monitor'
import VET from '@vechain/hw-app-vet'
import 'babel-polyfill'
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid'

const um = new UsbMonitor(11415)

um.on('change', () => {
    um.devices()
})

