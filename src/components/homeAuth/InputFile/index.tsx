import { Download } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent } from 'react'

interface FileInputProps {
  imageUrl: string
  handleFile: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputFile({ imageUrl, handleFile }: FileInputProps) {
  return (
    <div className="flex items-center justify-center rounded-md border-2 border-gray-300">
      <label className=" flex h-[474px] cursor-pointer items-center justify-center rounded-md bg-white">
        <span className="absolute z-50 opacity-80 hover:opacity-100">
          <Download
            className={
              imageUrl
                ? 'text-black/50 duration-700 hover:scale-110 hover:text-black'
                : 'text-black/80 duration-700 hover:scale-110 hover:text-black'
            }
            size={24}
          />
        </span>

        <input
          className="hidden"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFile}
        />

        {imageUrl ? (
          <Image
            className={'h-[100%] w-[100%] rounded-md object-cover'}
            src={imageUrl}
            alt="Product picture"
            width={250}
            height={250}
          />
        ) : null}
      </label>
    </div>
  )
}
