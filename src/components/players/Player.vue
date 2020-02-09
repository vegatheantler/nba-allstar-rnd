<template>
    <div class="col-sm-6 col-xs-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title" :style="{backgroundImage: 'url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'+ player.playerId +'.png)'}">
                    {{ player.firstName + ' ' + player.lastName }}
                    <small>(Rating: {{ player.rating  }})</small>
                </h3>
            </div>
            <div
                :style="{backgroundImage: 'url(https://cdn.nba.net/assets/logos/teams/secondary/web/'+ player.teamId +'.svg)'}"
                class="team-bg"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['player']
    }
</script>

<style scoped>
    .panel-heading {
        background: none;
    }
    .panel-title {
        background-repeat: no-repeat;
        background-position: center left;
        padding: 20px;
        background-size: contain;
        text-align: center;
    }

    .panel {
        position: relative;
        z-index: 0;
    }

    .team-bg {
        height: 100%;
        position: absolute;
        right: 0;
        width: 100%;
        top: 0;
        background-size: auto;
        background-repeat: no-repeat;
        background-position: right;
        z-index: -1;
        opacity: 0.6;
    }

    .allstar h3 {
        font-weight: 600;
        text-shadow: 1px 1px #333333;
    }
</style>