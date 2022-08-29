import Image from 'next/image'
import useSWR from 'swr'
import IconSpotify from './iconSpotify'

export default function Spotify() {
    const fetcher = (url) => fetch(url).then(r => r.json())
    const { data } = useSWR('/api/spotify', fetcher)

    const notPlaying = (
        <div className='flex gap-2'>
            <IconSpotify />
            <span className='text-white font-semibold'>Not Playing</span>
            –
            <span className='font-medium'>Spotify</span>
        </div>
    )

    if (!data) return (
        <div className='flex justify-start items-center gap-2'>
            <div className='w-[25px] h-[25px] rounded-full bg-zinc-800 animate-pulse' />
            <span className='w-[5.4rem] h-4 rounded-full bg-zinc-700 animate-pulse' />
            <span className='w-[4.4rem] h-4 rounded-full bg-zinc-900 animate-pulse' />
        </div>
    )

    return (
        <div className='flex justify-start items-center gap-2'>
            {data.albumImageUrl ?
                <div className='flex gap-2'>
                    <div className='flex justify-center items-center'>
                        <Image src={data.albumImageUrl} alt={data.album} width={25} height={25} layout={'fixed'} 
                            className='rounded-full z-20' />
                        <div className='w-5 h-5 rounded-full bg-green animate-ping absolute z-10' />
                    </div>
                    <strong className='text-white font-semibold'>{data.album}</strong>
                    –
                    <strong className='font-medium'>{data.artist}</strong>
                </div>
                : notPlaying
            }
        </div>
    )
}
