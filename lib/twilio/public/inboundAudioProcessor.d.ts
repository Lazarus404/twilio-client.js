export interface InboundAudioProcessor {
  createProcessedStream(stream: MediaStream): Promise<MediaStream>;
  destroyProcessedStream?(stream: MediaStream): Promise<void>;
}
