<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝Pizaa</h1>
				<h2>这里有你喜欢的Pizaa</h2>
				<button @click="gotoMeanue" class="btn btn-success">Lets order</button>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			gotoMeanue(){
				// this.$router.go(-1);
				// this.$router.replace('/admin')
				// this.$router.replace({name:'meaLink'})
				// this.$router.push('/login')
				this.$router.push({name:'meaLink'})
			}
		}
	}
</script>
<style>
#home{
	background:url('../../src/assets/ZHOU.jpg');
	height:85vh;
	padding:10%;
}
h1,h2{
	margin:6%;
}
.background{
	background:#eee;
	opacity: 0.8;
	max-width: 70vw;
	margin: 0 auto;
	padding: 20px 0;
}

</style>