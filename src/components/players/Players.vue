<template>
    <div>
        <div class="col-sm-6 col-md-6 allstar east">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">
                        East Allstars
                        <small>(Rating: {{ rating.east }})</small>
                    </h3>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6 allstar west text-center">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        West Allstars
                        <small>(Rating: {{ rating.west }})</small>
                    </h3>
                </div>
            </div>
        </div>
        <transition-group name="cell" mode="in-out">
            <app-player v-for="(player, i) in players" :key="player.playerId" :player="player" class="cell" :class="team(i)"/>
        </transition-group>
    </div>
</template>

<script>
    import Player from './Player.vue';

    export default {
        components: {
            appPlayer: Player
        },
        computed: {
            players() {
                return this.$store.getters.players;
            },
            rating () {
                let allstars = this.players;
                if (!allstars || allstars === null || typeof allstars === 'undefined' || allstars.length == 0) {
                    return {east: 0, west: 0};
                }

                let eastSum = 0;
                let westSum = 0;
                for (let i=0; i<24; i+=2) {
                    if (allstars.length <= i) {
                        break;
                    }
                    eastSum += allstars[i].rating;
                    westSum += allstars[i+1].rating;
                }
                return {east: (eastSum/12).toFixed(0), west: (westSum/12).toFixed(0)};
            }
        },
        methods: {
            team(i) {
                return {
                    'allstar' : i<24,
                    'east' : !(i%2),
                    'west' : i%2
                }
            }
        }
    }
</script>   

<style scoped>
    .cell-move {
        transition: all 5s;
    }
    .cell {
        justify-content: space-around;
        align-items: center;
        width: 50%; 
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }
</style>

<style>
    .allstar.east .panel-heading{
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,200,1) 0%, rgba(9,9,225,1) 25%, rgba(0,50,255,0.6) 90%);
        color: #ffffff;
    }

    .allstar.west .panel-heading{
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(200,0,2,1) 0%, rgba(225,9,9,1) 25%, rgba(255,50,0,0.6) 90%);
        color: #ffffff;
    }
</style>