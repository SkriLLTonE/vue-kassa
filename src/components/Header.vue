<template>
    <header id="header">
        <div class="header">
            <div class="header_wrap">
                <div class="header_wrap_cont">
                    <div class="header_wrap_cont_btn left">
                        <div class="btn_rigth">Admin</div>
                    </div>
                    <div class="header_wrap_cont_btn right">
                        <div class="btn_left">Касса</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props:{

        },
    }
</script>

<style lang="scss" scoped>
    .header {
        &_wrap {
            width: 100%;

            &_cont {
                display: flex;

                &_btn.left {
                    margin-right: auto;

                    & .btn_rigth {
                        background: #0069d9;
                        width: 50px;
                        color: white;
                        border-radius: 15px;
                        padding: 10px 30px;
                        cursor: pointer;
                        &:hover {
                            background: #0069d9;
                        }
                    }
                }

                &_btn.right {
                    & .btn_left {
                        background: #0069d9;
                        width: 43px;
                        color: white;
                        border-radius: 15px;
                        padding: 10px 30px;
                        cursor: pointer;
                        :hover {
                            background: #0069d9;
                        }
                    }
                }
            }
        }
    }

    .btn {
        background: #0069d9;
        width: 80px;
        color: white;
        border-radius: 15px;
        padding: 15px;

        &:hover {
            background: #0069d9;
        }
    }

</style>