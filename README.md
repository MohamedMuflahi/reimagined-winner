# Setup:

## How to get app running locally:

1. clone down the repo 

```shell
git clone git@github.com:MohamedMuflahi/reimagined-winner.git 
```

2.  change directory into  reimagined-winner

```shell
cd reimagined-winner
```

3.  check your ruby verison, you may need to install version 2.7.4
```shell
ruby -v
```

4.  run bundle to install all the gems required 

```shell
bundle 
```

5. create,migrate and seed the database

```shell
rails db:create db:migrate db:seed
```

6.  run the rails server 

```shell
rails s
```


## open a new terminal 

1. change directory into client

```shell
cd client
```

2.  Install dependencies using your perffered package manager (I used Bun)

```shell
npm install 
```

3.  run the vite server

```shell
npm run dev
```

## go to http://localhost:5173 

# Congrats! 
