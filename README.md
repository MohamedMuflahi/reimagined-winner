Last login: Sun Jan  8 12:22:42 on ttys005
➜  giant-machines git:(extras) vim README.md 
➜  giant-machines git:(extras) ✗ open README.md 
➜  giant-machines git:(extras) ✗ ls  
Gemfile      Rakefile     client       db           public       tmp
Gemfile.lock app          config       lib          storage      vendor
README.md    bin          config.ru    log          test
➜  giant-machines git:(extras) ✗ git status
On branch extras
Your branch is up to date with 'origin/extras'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
➜  giant-machines git:(extras) ✗ git add .
➜  giant-machines git:(extras) ✗ git commit -m "added setup doc" 
[extras e6313b5] added setup doc
 1 file changed, 59 insertions(+), 24 deletions(-)
➜  giant-machines git:(extras) git push
Enter passphrase for key '/Users/muflahi/.ssh/id_ed25519': 
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 730 bytes | 730.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:MohamedMuflahi/reimagined-winner.git
   371ea58..e6313b5  extras -> extras
➜  giant-machines git:(extras) vim README.md 






















 1 README.md                                                                                             X 
 
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
