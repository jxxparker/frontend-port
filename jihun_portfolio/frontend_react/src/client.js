import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'j3q3wak1',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'sk4gpYlU7ayPIav2p2FtnXuAdLj25jR1tMjoKtgSZTwarCzlwgzCKEvPnGsyny3l8AkFAnIrc5ueSmqL8I16uAiAING9JGzcejhrkgpz2XFGmxZdiG57siOZVSsUBgOSGspNjs5qJgAJYG7KiLToJv5Jn6EMPLS4fQDFlIc33E4v3N5laGpF',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
