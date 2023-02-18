'use client'

import fetcher from 'lib/fetcher'
import Image from 'next/image'
import useSWR from 'swr'
import SpotifyIcon from './icons/spotify'

export default function Spotify() {
    const { data } = useSWR('/api/spotify', fetcher)

    const notPlaying = (
        <div className='flex gap-2'>
            <SpotifyIcon />
            <span className='text-dark dark:text-white font-semibold'>Not Playing</span>
            –
            <span className='font-medium'>Spotify</span>
        </div>
    )

    if (!data) return (
        <div className='flex justify-start items-center gap-2'>
            <div className='w-[25px] h-[25px] rounded-full bg-dark/40 dark:bg-light/40 animate-pulse' />
            <span className='w-[5.4rem] h-4 rounded-full bg-dark/20 dark:bg-light/20 animate-pulse' />
            <span className='w-[4.4rem] h-4 rounded-full bg-dark/10 dark:bg-light/10 animate-pulse' />
        </div>
    )

    return (
        <div className='flex justify-start items-center gap-2'>
            {data.albumImageUrl ?
                <div className='flex gap-2 truncate'>
                    <div className='flex justify-center items-center'>
                        <Image
                            src={data.albumImageUrl}
                            alt={data.album}
                            width={25}
                            height={25}
                            priority
                            className='rounded-full z-20 object-contain'
                        />
                        <div className='w-5 h-5 rounded-full bg-green animate-ping absolute z-10' />
                    </div>
                    <strong className='text-dark dark:text-white font-semibold truncate'>{data.title}</strong>
                    –
                    <strong className='font-medium truncate'>{data.artist}</strong>
                </div>
                : notPlaying
            }
        </div>
    )
}
