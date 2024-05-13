'use client'
import React from 'react'
import {SearchManufacturer } from '@/components'
import { useState } from 'react'

import Image from 'next/image'; // Import the Image component from the correct package
import {useRouter } from 'next/navigation';

const SearchButton = ({otherClasses}:{otherClasses:string}) => {
  return (
  <button type = "submit" className=  {`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src = "/magnifying-glass.svg"
            alt = "search"
            width = {40}
            height = {40}
            className = "object-contain"
        >
        </Image>
  </button>
  )
}

const SearchBar = ({setManufacturer,setModel}) => {
  const [searchManufacturer, setsearchManufacturer] = useState('') 
  const [searchModel, setsearchModel] = useState('')
  const router = useRouter()
 
  const handleSeach = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(searchManufacturer.trim() === '' && searchModel.trim() === '') {
      return alert('Please enter a manufacturer or model')
    } 

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }
  return (
    <form onSubmit = {handleSeach} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer 
        selected = {searchManufacturer}
        setSelected = {setsearchManufacturer}/>
        <SearchButton otherClasses = "sm:hidden"/>
      </div>
      <div className="searchbar__item">
        <Image
          src = "/model-icon.png"
          width = {25}
          height = {25}
          className = "absolute w-[20px] h-[20px] ml-4"
          alt = "model"
        >

        </Image>
        <input type="text" name = "model" value = {searchModel} onChange={(e)=>setsearchModel(e.target.value)} placeholder = 'Tiguan' className = "searchbar__input"/>
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar