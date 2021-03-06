import sharp from 'sharp'
import videoToGif from './videoToGif'
import sizeOf from 'image-size'
import { writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import crop from './crop'

const convert = async (data: Buffer, mime: string, type: 'crop' | 'full' | 'default' = 'default'): Promise<Buffer> => {
    const isVideo = mime.startsWith('video')
    const image = isVideo ? await videoToGif(data) : data
    if ((isVideo || mime.includes('gif')) && type === 'crop') {
        const filename = `${tmpdir()}/${Math.random().toString(36)}.webp`
        await writeFile(filename, image)
        return convert(await crop(filename), 'image/webp', 'default')
    }

    const img = sharp(image, { animated: true }).toFormat('webp')

    if (type === 'crop') img.resize(512, 512, { fit: 'contain' })

    if (type === 'full') {
        let { height, width } = sizeOf(image)
        ;[height, width] = [height, width].map((x) => x || 0)
        const [sub, compare] = [Math.abs(height - width), height > width]
        const options = ((): sharp.ExtendOptions => {
            const [horizontal, vertical] = [compare ? sub : 0, !compare ? sub : 0].map((number) =>
                Math.round(number / 2)
            )
            return {
                top: vertical,
                left: horizontal,
                right: horizontal,
                bottom: vertical,
                background: {
                    r: 255,
                    g: 255,
                    b: 255,
                    alpha: 0
                }
            }
        })()
        img.extend(options)
    }

    return await img.toBuffer()
}

export default convert
