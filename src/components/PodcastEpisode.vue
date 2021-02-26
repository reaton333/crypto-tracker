<template>
  <div>
    <h1>{{ title }}</h1>
    <img class="episodeImage" :src="logo.url" :alt="logo.alt"/>
    <p>{{ episodeSummary }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
        title: null,
        logo: null,
        episodeSummary: null,
        episodeName: null,
        results: []
    };
  },
    async created () {

        this.episodeName = this.$route.params.episodeName;
        this.getContent(this.episodeName);

    // console.log
    },
    methods: {
        async getContent(theEpisodeName) {
        //   const Prismic = require('@prismicio/client')

            console.log('ENTER getContent() for: ' + theEpisodeName)

            const MASTER_REF = 'YDhfWhEAACMAPuPG'
            const baseURL = `https://the-crypto-masters-website.cdn.prismic.io/api/v2/documents/search?ref=${MASTER_REF}&`
            var apiParams = `q=%5B%5Bat(my.episode-summary.uid%2C+%22${theEpisodeName}%22)%5D%5D&format=json`
            /////////////////q=[at(my.episode-summary.uid, "${episode uid here}")]

            var full_path = baseURL + apiParams;

            try {
                const res = await axios.get(full_path)
    
                // this.coinDetails = res.data;
                console.log(baseURL + apiParams)
                // console.log(res.data.results)

                this.results = res.data.results[0].data;

                this.title = this.results.episode_title[0].text
                this.logo = this.results["episode-image"]
                this.episodeSummary = this.results["episode-summary"][0].text
                console.log(this.episodeName)

            } catch (e) {
                if(e.response.status === 404) {
                    console.log('ahhhhhhhhhhh')
                    this.$router.push('/NotFound')
                }
                console.log(e.response.status);
            }
        }
    },
}
</script>

<style>
.episodeImage {

    width: 502px;
}
</style>