i'm a little fuzzy on the git hub readme (prob because i am slow)

##instruction
1. install docker, use the command
    https://docs.docker.com/engine/installation/mac/
    use the docker quickstart option in the dialog under installation(we won't be using the GUI)
1. install envsubst you need to run the following commands
    1. `brew install gettext`
    1. `brew link --force gettext`
    1. add the following line to your .zshrc file `alias envsubst='/usr/local/Cellar/gettext/0.19.7/bin/envsubst'`
1. make sure the machine is on.
1. get your docker machine and the daemon connectioned `eval "$(docker-machine env default)"`


##
