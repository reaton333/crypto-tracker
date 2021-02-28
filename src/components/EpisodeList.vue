<template>
    <!-- {{ results }} -->
    <h1 class="header">Episode List</h1>
    <!-- <div class="cards-container"> -->
        <div class="episode-cards">
            <div class="card" v-for="result in results" :key="result">
                <EpisodeCard :episodeData="result" />
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import axios from 'axios';
import EpisodeCard from '@/components/EpisodeCard.vue'

export default {
    components: {
        EpisodeCard
    },
    data () {
        return {
            results: []
        };
    },
    async created () {

        this.getContent();
    },
    methods: {
        async getContent() {

            console.log('ENTER getContent()')

            const MASTER_REF = 'YDwCJBAAACAA0Sam'
            const baseURL = `https://the-crypto-masters-website.cdn.prismic.io/api/v2/documents/search?ref=${MASTER_REF}`
            var apiParams = `&format=json`

            var full_path = baseURL + apiParams;

            try {
                const res = await axios.get(full_path)
                // console.log(full_path)

                this.results = res.data.results;
                // console.log(this.results)

            } catch (e) {
                if(e.response.status === 404) {
                    console.log('ahhhhhhhhhhh')
                    this.$router.push('/NotFound')
                }
                console.log(e.response.status);
            }
        },
    },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.header{
    padding-bottom: 5%;
}

.card {
  width: 25%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}

.cards-container {
  width: 90%;
  margin: 50px auto;
}

.episode-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

@media screen and (max-width: 2000px) {
  .card {
    width: 30%;
  }
}

@media screen and (max-width: 1000px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 620px) {
  .episode-cards {
    width: 100%;
  }

  .heading {
    padding: 20px;
    font-size: 20px;
  }

  .card {
    width: 80%;
  }
}
</style>