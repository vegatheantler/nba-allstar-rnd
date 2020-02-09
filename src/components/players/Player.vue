<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title" :style="{backgroundImage: 'url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'+ player.playerId +'.png)'}">
                    {{ player.firstName + ' ' + player.lastName }}
                    <small>(Rating: {{ player.rating  }})</small>
                </h3>
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
        background-position: center right;
        padding: 20px;
        background-size: contain;
    }
</style>