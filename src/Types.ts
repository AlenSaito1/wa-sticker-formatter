/** Sticker metadata config */
export interface IStickerConfig {
    /** Sticker Pack title*/
    pack?: string
    /** Sticker Pack Author*/
    author?: string
    /** Sticker Pack ID*/
    id?: string
    /** Sticker Category*/
    categories?: Categories[]
}

export interface IStickerOptions extends IStickerConfig {
    /** How you want your sticker to look like
     * Can be crop or full. Defaults to 'default' (no changes)
     */
    type?: 'default' | 'crop' | 'full'
}

export interface IRawMetadata {
    emojis: string[]
    'sticker-pack-id': string
    'sticker-pack-name': string
    'sticker-pack-publisher': string
}

export type Metadata = IStickerConfig | IStickerOptions

type Love =
    | '❤'
    | '😍'
    | '😘'
    | '💕'
    | '😻'
    | '💑'
    | '👩‍❤‍👩'
    | '👨‍❤‍👨'
    | '💏'
    | '👩‍❤‍💋‍👩'
    | '👨‍❤‍💋‍👨'
    | '🧡'
    | '💛'
    | '💚'
    | '💙'
    | '💜'
    | '🖤'
    | '💔'
    | '❣'
    | '💞'
    | '💓'
    | '💗'
    | '💖'
    | '💘'
    | '💝'
    | '💟'
    | '♥'
    | '💌'
    | '💋'
    | '👩‍❤️‍💋‍👩'
    | '👨‍❤️‍💋‍👨'
    | '👩‍❤️‍👨'
    | '👩‍❤️‍👩'
    | '👨‍❤️‍👨'
    | '👩‍❤️‍💋‍👨'
    | '👬'
    | '👭'
    | '👫'
    | '🥰'
    | '😚'
    | '😙'
    | '👄'
    | '🌹'
    | '😽'
    | '❣️'
    | '❤️'
type Happy =
    | '😀'
    | '😃'
    | '😄'
    | '😁'
    | '😆'
    | '😅'
    | '😂'
    | '🤣'
    | '🙂'
    | '😛'
    | '😝'
    | '😜'
    | '🤪'
    | '🤗'
    | '😺'
    | '😸'
    | '😹'
    | '☺'
    | '😌'
    | '😉'
    | '🤗'
    | '😊'
type Sad =
    | '☹'
    | '😣'
    | '😖'
    | '😫'
    | '😩'
    | '😢'
    | '😭'
    | '😞'
    | '😔'
    | '😟'
    | '😕'
    | '😤'
    | '😠'
    | '😥'
    | '😰'
    | '😨'
    | '😿'
    | '😾'
    | '😓'
    | '🙍‍♂'
    | '🙍‍♀'
    | '💔'
    | '🙁'
    | '🥺'
    | '🤕'
    | '☔️'
    | '⛈'
    | '🌩'
    | '🌧'
type Angry =
    | '😯'
    | '😦'
    | '😧'
    | '😮'
    | '😲'
    | '🙀'
    | '😱'
    | '🤯'
    | '😳'
    | '❗'
    | '❕'
    | '🤬'
    | '😡'
    | '😠'
    | '🙄'
    | '👿'
    | '😾'
    | '😤'
    | '💢'
    | '👺'
    | '🗯️'
    | '😒'
    | '🥵'
type Greet = '👋'
type Celebrate =
    | '🎊'
    | '🎉'
    | '🎁'
    | '🎈'
    | '👯‍♂️'
    | '👯'
    | '👯‍♀️'
    | '💃'
    | '🕺'
    | '🔥'
    | '⭐️'
    | '✨'
    | '💫'
    | '🎇'
    | '🎆'
    | '🍻'
    | '🥂'
    | '🍾'
    | '🎂'
    | '🍰'

/** Sticker Category. Learn More: https://github.com/WhatsApp/stickers/wiki/Tag-your-stickers-with-Emojis*/
export type Categories = Love | Happy | Sad | Angry | Greet | Celebrate
