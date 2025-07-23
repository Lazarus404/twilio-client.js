import IOutputDeviceCollection from "./outputdevicecollection";

export default interface IAudioHelper {
  readonly availableInputDevices: Map<string, MediaDeviceInfo>;
  readonly availableOutputDevices: Map<string, MediaDeviceInfo>;
  readonly inputDevice: MediaDeviceInfo | null;
  readonly inputStream: MediaStream | null;
  readonly isOutputSelectionSupported: boolean;
  readonly isVolumeSupported: boolean;
  readonly ringtoneDevices: IOutputDeviceCollection;
  readonly speakerDevices: IOutputDeviceCollection;
  on(
    eventName: "deviceChange",
    handler: (lostActiveDevices: MediaDeviceInfo[]) => void
  ): any;
  setInputDevice(deviceId: string): Promise<void>;
  unsetInputDevice(): Promise<void>;
}
