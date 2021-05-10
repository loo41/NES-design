type SnsIcons =
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'github'
  | 'google'
  | 'gmail'
  | 'medium'
  | 'linkedin'
  | 'twitch'
  | 'youtube'
  | 'reddit'
  | 'whatsapp';

type OtherIcons = 'close' | 'trophy' | 'coin' | 'star' | 'heart' | 'like';

export type Icons = SnsIcons | OtherIcons;
export type CharacterIcons =
  | 'nes-mario'
  | 'nes-ash'
  | 'nes-pokeball'
  | 'nes-bulbasaur'
  | 'nes-charmander'
  | 'nes-squirtle'
  | 'nes-kirby';
