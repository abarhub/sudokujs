# Monté de version

La documentation pour la monté de version d'angular est [ici](https://update.angular.io/)

* Mise à jour d'angular
```shell
ng update @angular/core@XXX @angular/cli@XXX
```
Ca devrait fonctionner. Si ça ne marche pas, il faut faire :
```shell
npm install
ng update --force @angular/core @angular/cli
```

* Mise à jour de ng-bootstrap
La documentation pour la mise à jour est [ici](https://ng-bootstrap.github.io/#/getting-started)
```shell
ng update @ng-bootstrap/ng-bootstrap@XXX
```
Ensuite il faut monter la version de bootstrap et popper en faisant attention à mettre les [versions compatibles avec ngbootstrap](https://ng-bootstrap.github.io/#/getting-started) :
```shell
npm i bootstrap@XXX @popperjs/core@XXX
```

* Analyse des problèmes de sécurité
Pour analyser les problèmes de sécurité, il faut executer :
```shell
npm audit
```

Ensuite pour les corriger, il faut executer :
```shell
npm audit fix
```shell

* Test de la mise à jour

Il faut vérifier que tout fonctionne. Pour cela, il faut lancer l'application et vérifier qu'elle fonctionne.
Ensuite il faut lancer les tests unitaires avec la commande :
 ```shell
XXX
```shell
