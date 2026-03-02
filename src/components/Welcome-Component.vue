<template>       <!--Welcome section-->
       <section class="image-background section-height">
        <div class="flex-center flex-direction-column section-height">
               <h1 class="text-color-white welcome-text-font-size">{{heading}}</h1>
                <p class="text-color-white margin-top-bottom-10 welcome-paragraph-font-size">{{subTitle}}</p>
                <button v-if="isButtonNeed">{{buttonText}}</button> 
               
        </div>     
    </section>
</template>
<script setup>
defineProps({
    heading:{
        type:String,
        default:''
    },
    subTitle:{
        type:String,
        default:''
    },
    buttonText:{
        type:String,
        default:''
    },
    isButtonNeed:{
        default:false,
        type:Boolean
    }
})
</script>
