import React from "react"
import Card from "./Card"
export default function Meme (){

	const [allMemes, setAllMemes] = React.useState({})

	const [meme, setMeme] = React.useState({
		topText : "",
		bottomText : "",
		randomImage: "https://i.imgflip.com/1bij.jpg"
	})

	React.useEffect(()=> {
		fetch('https://api.imgflip.com/get_memes')
			.then(response => response.json())
			.then(data => setAllMemes(data.data.memes))
	}, [])


	function handleChange(event){
		const {value, name} = event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))
	}

	function handleSubmit(event){
		event.preventDefault()
		const randomNum = Math.floor(Math.random()* allMemes.length)
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: allMemes[randomNum].url
		}))
	}

	return(
		<div className="meme">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Shut up" name="topText" value={meme.topText} onChange={handleChange} />
				<input type="text" placeholder="and take my money" name="bottomText" value={meme.bottomText} onChange={handleChange} />
				<input className="submit" type="submit" value="Get a new meme image" />
			</form>
			<Card 
				topText={meme.topText}
				bottomText={meme.bottomText}
				backImage={meme.randomImage}
			/>
		</div>
	)
}