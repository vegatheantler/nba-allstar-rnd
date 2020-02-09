<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title" :style="{backgroundImage: 'url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'+ player.playerId +'.png)'}">
                    {{ player.firstName + ' ' + player.lastName }}
                    <small>(Rating: {{ player.rating  }})</small>
                </h3>
                
                <div
                    :style="{backgroundImage: 'url(https://cdn.nba.net/assets/logos/teams/secondary/web/'+ player.teamId +'.svg)'}"
                    class="team-bg"
                >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['player']
    }
</script>

<style scoped>
    .panel-title {
        background-repeat: no-repeat;
        background-position: center left;
        padding: 20px;
        background-size: contain;
        text-align: center;
    }

    .panel-heading {
        position: relative;
    }

    .team-bg {
        height: 100%;
        position: absolute;
        right: 0;
        width: 75px;
        top: 0;
        background-size: contain;
    }
</style>