<template>
	<div class="bg-yellow-300 w-full p-6 px-10 flex flex-col">
		<div id="numberList" class="flex flex-row items-center gap-x-2 mb-4">
			<div class="numberbubble" :class="{used: step>=1 }">
				<p>1</p>
			</div>
			<div class="betweenLines"></div>
			<div class="numberbubble" :class="{used: step>=2 }">
				<p>2</p>
			</div>
			<div class="betweenLines"></div>
			<div class="numberbubble" :class="{used: step>=3 }">
				<p>3</p>
			</div>
		</div>

		<transition>
		<!-- ========================STEP 1======================== -->
		<div v-if="step==1" class="h-full">
			<div class="grid grid-cols-2 gap-x-4 h-full">
				<!-- LEFT SIDE FORM -->
				<form class="flex flex-col">
					<!-- TITLE -->
					<h2>Title</h2>
					<input type="text" name="Title" id="title" v-model="title" placeholder="Title">
					
					<!-- MODEL -->
					<h2>Model</h2>
					<input type="text" name="model" id="model" v-model="model">

					<div class="grid grid-cols-5 gap-x-4">
						<div class="col-span-2">
							<h2>Product Type</h2>
							<div id="choiceRow" class="grid grid-cols-2">
								<input type="radio" name="productType" value="frames" id="frames" v-model="productType">
								<label for="frames"><p>Frames</p></label>

								<input type="radio" name="productType" value="sunglasses" id="sunglasses" v-model="productType">
								<label for="sunglasses"><p>Sunglasses</p></label>
							</div>
						</div>
						<div class="col-span-3">
							<h2>Gender/Age</h2>
							<div id="choiceRow" class="grid grid-cols-3">
								<input type="radio" name="genderAge" value="men" id="men" v-model="gender">
								<label for="men"><p>Mens</p></label>

								<input type="radio" name="genderAge" value="women" id="women" v-model="gender">
								<label for="women"><p>Womens</p></label>

								<input type="radio" name="genderAge" value="children" id="children" v-model="brandchoice">
								<label for="children"><p>Childrens</p></label>
							</div>
						</div>
					</div>

					<!-- BRAND -->
					<h2>Brand</h2>
					<div id="choiceRow" class="grid grid-cols-5">
						<input type="radio" name="brand" value="dior" id="dior" v-model="brandchoice">
						<label for="dior"><p>Dior</p></label>

						<input type="radio" name="brand" value="silhouette" id="silhouette" v-model="brandchoice">
						<label for="silhouette"><p>Silhouette</p></label>

						<input type="radio" name="brand" value="rayband" id="rayband" v-model="brandchoice">
						<label for="rayband"><p>Rayband</p></label>

						<input type="radio" name="brand" value="gucci" id="gucci" v-model="brandchoice">
						<label for="gucci"><p>Gucci</p></label>

						<input type="radio" name="brand" value="oakley" id="oakley" v-model="brandchoice">
						<label for="oakley"><p>Oakley</p></label>
					</div>

					<!-- DESCRIPTION -->
					<h2>Description</h2>
					<textarea v-model="description" type="text" resize="none" name="Description" id="description" placeholder="Description"></textarea>

					<div class="grid grid-cols-2">
						<!-- LENS MEASUREMENTS -->
						<div>
							<h2>Lens</h2>
							<div id="lens" class="flex flex-row items-center">
								<p>±</p><input type="number" v-model="lensLower"><p>- ±</p><input type="number" v-model="lensUpper">
							</div>
						</div>

						<!-- GLASSES SIZE -->
						<div>
							<h2>Size</h2>
							<div id="size" class="flex flex-row items-center">
								<input type="number" v-model="size1"><p class="mr-2">-</p><input type="number" v-model="size2">
							</div>
						</div>
					</div>
				</form>

				<!-- RIGHT SIDE DROPPER -->
				<div class="flex flex-col items-end">
					<div 
						id="dropArea"
						class="w-full h-full flex flex-col justify-center items-center rounded-xl"
						@dragenter="highlight($event)"
						@dragover="highlight($event)"
						@dragleave="unhighlight($event)"
						@drop="unhighlight($event);handleDrop($event)"
					>
						<label for="fileElem" class="cursor-pointer flex flex-col items-center">
							<svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
							</path></svg>
							<h3>Click here to upload file...</h3>
						</label>
						<img id="previewImage" :src="imageURL">

						<!-- HIDDEN -->
						<input type="file" id="fileElem" name="penis" class="hidden" multiple accept="image/*" @change="handleDropinput()">
					</div>
					<button class="py-2 px-6 text-2xl flex flex-row items-center" @click="next(1)"><p class="mr-3">Next</p><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
				</div>
			</div>
		</div>
		<!-- ========================END STEP 1======================== -->

		<!-- ========================STEP 2======================== -->
		<div v-else-if="step==2">
			<h2>Colour</h2>
			<div class="w-3/5">
				<div class="flex flex-row justify-between mb-2">
					<h3 class="font-semibold">Frame Colour</h3>
					<h3 class="font-semibold">Lens Colour</h3>
				</div>
				<div class="flex flex-row items-center mb-4" v-for="(colour, index) in frameColours" :key="index">
					<div class="flex flex-row justify-between items-center w-full">
						<multiselect 
							v-model="frameColours[index]"
							:options="frameOptions"
							tag-placeholder="Add this as new tag"
							tag-position="bottom"
						></multiselect>
						<div>↔</div>
						<multiselect
							v-model="lensColours[index]"
							:options="lensOptions"
							tag-placeholder="Add this as new tag"
							tag-position="bottom"
						></multiselect>
					</div>
					<svg @click="frameColours.splice(index, index+1);lensColours.splice(index, index+1)" class="w-6 h-6 ml-3" fill="#444444" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
				</div>
				<div class="relative" @click="frameColours.push('');lensColours.push('')">
					<svg class="w-10 h-10 relative rounded-full bg-yellow-300 cursor-pointer" style="left:10%;z-index:2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
					<hr class="border-black absolute w-full verticalCenter">
				</div>
				<h3>OR</h3>

				<h2>Add New Colour</h2>
				<div class="flex flex-col">

					<input type="text" name="Colour Name" id="" class="p-4 focus:ring" placeholder="Colour name...">
					<input type="radio" name="Frames" id="">
					<input type="radio" name="Lenses" id="">
					<input type="color" name="" id="">
				</div>
			</div>
			<button class="py-2 px-6 text-2xl flex flex-row items-center" :disabled="!checkSecond" @click="next(2)"><p class="mr-3">Next</p><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
		</div>
		<!-- ========================END STEP 2======================== -->

		<!-- ========================STEP 3======================== -->
		<div v-else-if="step==3" class="flex flex-col h-full">
			<h1 class="text-4xl mb-4">Preview</h1>

			<div class="h-full bg-blue-100">
				<div class="relative h-full">
					<!-- 💥BACK BUTTON💥 -->
					<img
						class="left-0 absolute w-4/12 opacity-25"
						id="logo"
						:src="resolveBrandImage(brandchoice)"
						:alt="brandchoice"
						style="top:10%"
					>

					<img :src="imageURL" style="right:5%" id="productImage" class="absolute verticalCenter w-6/12" alt="Product Image">

					<!-- 💥BLOCK OF TEXT💥 -->
					<div
						v-if="title"
						class="absolute"
						style="
							left:18%;
							bottom:15%;
							z-index:1
						"
						id="titleblock"
					>
						<h1 class="font-bold leading-tight mb-2" style="font-size:4rem">
							{{title}}
						</h1>
						<h2 class="text-lg">Model {{model}}</h2>

						<!-- COLOR PODS -->
						<h3 class="text-lg font-semibold mt-5">Colours</h3>
						<div class="inline-flex flex-row gap-x-3 justify-center mt-1">
							<div id="colorPods" :class="{active:colorIndex==3}" class="h-4 w-4 rounded-full overflow-hidden flex flex-row relative" v-for="(colorIndex, index) in [0,1,2,3,4]" :key="index">
								<div class="h-full w-1/2" :style="'background-color:' + colourTranslatorFrames[frameColours[colorIndex]]"></div>
								<div class="h-full w-1/2" :style="'background-color:' + colourTranslatorLens[lensColours[colorIndex]]"></div>
							</div>
						</div>

						<!-- DETAILS -->
						<h3 class="text-lg font-semibold mt-3">Details</h3>
						<div class="flex flex-row items-center">
							<img class="w-8 mr-2" src="../assets/images/glassesSize.svg" alt="Glasses Size">
							<p>{{size1}} - {{size2}}</p>
						</div>
						<div class="flex flex-row items-center">
							<img class="w-8 mr-2" src="../assets/images/nosepad.svg" alt="Nosepad">
							<p>{{nosepad}}</p>
						</div>
						<p>-/+{{lensLower}}.00 ➡ -/+{{lensUpper}}.00</p>
					</div>
				</div>
			</div>

			<button class="py-2 px-6 text-2xl flex flex-row items-center" @click="next(3)"><p class="mr-3">Next</p><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
		</div>
		<!-- ========================END STEP 3========================-->
		
		<!-- TRANSITION FOR STEPS -->
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import db from '@/firebase'
import 'firebase/firestore'
import 'firebase/storage'

export default Vue.extend({
	data(){
		return{
			step:2,
			file: {} as File,
			uploadProgress:[] as number[],
			frameOptions:[] as string[],
			lensOptions:[] as string[],
			imageURL:'',

			// TO UPLOAD First page
			title:'',
			model:'',
			productType:'',
			gender:'',
			nosepad:'',
			size1:0,
			size2:0,
			description:'',
			lensLower:0,
			lensUpper:0,
			brandchoice:'',

			// TO Upload Second page
			frameColours:[''],
			lensColours:[''],

			colourTranslatorFrames:{} as Record<string, string>,
			colourTranslatorLens:{} as Record<string, string>

		}
	},
	created(){
		db.firestore().collection('products').doc('frameColours').get().then(data=>{
			const makeData = data.data()!

			this.frameOptions = Object.keys(makeData as {})
			this.colourTranslatorFrames = makeData
		})
		db.firestore().collection('products').doc('lensColours').get().then(data=>{
			const makeData = data.data()!
			
			this.lensOptions = Object.keys(makeData as {})
			this.colourTranslatorLens = makeData
		})
	},
	beforeMount(){
		;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			document.body.addEventListener(eventName, this.preventDefaults, false)
		})
	},
	methods:{
		next(on: number){
			switch(on) {
				case 1:
					if(this.title && this.model && this.description && this.size1 && this.size2 && this.imageURL && this.brandchoice){
						this.step = 2;
					}else{
						alert("NOT ENOUGH VALUES")
					}
					break;
				case 2:
					if(this.checkSecond){
						this.step = 3;
					}
					else{
						alert("Choose More Colours")
					}
					break;
				case 3:
					this.uploadFile().then(()=>{
						this.resetValues()
						this.$router.push('/')
					})
					break;
				default:
					console.log('Finish the form')
					break;
			}
		},
		// COSMETICS
		highlight(e: Event){
			this.preventDefaults(e);
			document.getElementById('dropArea')?.classList.add('dragover');
		},
		unhighlight(e: Event){
			this.preventDefaults(e);
			document.getElementById('dropArea')?.classList.remove('dragover');
		},
		updateImages(){
			let reader = new FileReader()
			reader.readAsDataURL(this.file)
			reader.onloadend = () => {
				this.imageURL = reader.result as string
			}
		},

		//HANDLE THE BACKEND
		handleDrop(e: DragEvent){
			var dt = e.dataTransfer;
			if(!dt){
				console.log("Why de faq did you calll me?")
				return
			}
			// ADD FILES TO VUE INSTANCE
			if(!this.isFileImage(dt.files[0])){
				alert('File is not Image')
				return
			}
			this.file = dt.files[0];
			this.updateImages();
		},
		handleDropinput(){
			const input = document.getElementById('fileElem')! as HTMLInputElement;
			if(!this.isFileImage(input.files![0])){
				alert('File is not Image')
				return
			}
			this.file = input.files![0]
			this.updateImages();
		},
		
		// UPLOAD TO FIREBASE
		async uploadFile(){
			const place = db.firestore().collection('products').doc(this.productType).collection(this.gender);
			const added = await place.add({
				title:this.title,
				model:this.model,
				productType:this.productType,
				gender:this.gender,
				nosepad:this.nosepad,
				size:this.size1 + "-" + this.size2,
				description:'',
				fitRangeHigh:this.lensLower,
				fitRangeLow:this.lensUpper,
				brand:this.brandchoice,

				// TO Upload Second page
				frameColours:this.frameColours,
				lensColours:this.lensColours,
			})
			db.storage().ref(this.productType + "/" + added.id + ".png").put(this.file)
		},

		//TODO Get this sorted out
		resetValues(){

		},
		updateProgress(fileNumber: number, percent: number) {
			this.uploadProgress[fileNumber] = percent

			let total = this.uploadProgress.reduce((tot, curr) => tot + curr, 0) / this.uploadProgress.length
			document.querySelector('progress')!.value = total
		},

		// HOUSEKEEPING
		preventDefaults(e: Event){
			e.preventDefault();
			e.stopPropagation();
		},
		isFileImage(file: File) {
			return file && file['type'].split('/')[0] === 'image';
		},
		hasEmpty(array: string[]): boolean{
			let bad = false
			array.forEach(element=>{
				if(element.length == 0){
					bad = true
				}
			})
			return bad
		},
		resolveBrandImage: function(brandName: string): string{
            const resolveObject: Record <string,string> = {
                'dior':'dior.png',
                'rayband':'rayband.svg',
                'silhouette':'silhouette.png'
			}
			var images = require.context('../assets/images/brands', false, /\.png$|\.svg$/)
    		return images('./' + resolveObject[brandName]) 
        }
	},
	computed:{
		checkSecond(): boolean{
			return !(this.hasEmpty(this.lensColours)) && !(this.hasEmpty(this.lensColours))
		}
	}
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
	.multiselect__content-wrapper{
		z-index: 3;
		background-color: white;
	}
</style>

<style scoped>
	.verticalCenter{
		top:50%;
		transform: translateY(-50%);
	}

	.multiselect{
		width: 40%;
	}

	#previewImage:not([src='']){
		margin-top: 2rem;
		height:10rem;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}

	.dragover{
		border: 5px solid #303030 !important;
	}

	#lens p{
		font-size: 1.5rem;
	}
	#lens input,
	#size input{
		width: 2.5rem;
		margin-right: 0.5rem;
	}
	#choiceRow{
		background:white;
		border-radius: 0.4rem;
		cursor: pointer;
		overflow: hidden;
	}

	#choiceRow input[type="radio"]{
		display: none;
	}

	#choiceRow label{
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.3rem;
		transition: .15s ease;

		-webkit-user-select: none; /* Safari */        
		-moz-user-select: none; /* Firefox */
		user-select: none; /* Standard */
	}

	#choiceRow label:not(:nth-child(2)){
		border-left: 1px solid #bbbbbb;
	}
	#choiceRow label:not(:last-child){
		border-right: 1px solid #bbbbbb;
	}

	#choiceRow label p{
		font-size: 1.2rem;
		font-weight: 400;
	}
	#choiceRow input[type="radio"]:checked+label {
		background: black;
		color: white;
	}
	#choiceRow input[type="radio"]:checked+label p{
		font-weight: 600;
	}

	h2{
		font-size: 2rem;
		font-weight: 600;
		margin-top: 1rem;
		margin-bottom: .5rem;
	}

	#numberList{
		--thingySize:2.6em;
	}
	#dropArea{
		border: 2px dashed #aaaaaa;
		transition: .2s ease;
	}

	form input[type=text],
	form input[type=number],
	textarea{
		padding: .6rem;
		font-size: 1rem;
		border-radius: 0.5rem;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	form input[type=number]{
		-webkit-appearance: none;
		-moz-appearance: textfield;
	}
	textarea{
		resize: none;
	}

	.numberbubble{
		border:2px solid black;
		border-radius: 99px;
		height: var(--thingySize);
		width: var(--thingySize);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.numberbubble.used{
		background-color: black;
		color:white;
	}

	.numberbubble p{
		font-size: calc(var(--thingySize) * 0.5);
		vertical-align: middle;
		line-height: 100%;
	}
	.betweenLines{
		width:calc(var(--thingySize) * 1.4);
		height:0;
		border-radius: 999px;
		border:1.5px solid black;
	}
</style>