* 4474b74 - (HEAD -> main, origin/main) ✨ feat: added routes component and register routes in app (13 days ago) <Julio Rarick>
| 
|  package.json                    | 9 +++++++++
|  src/app.ts                      | 2 ++
|  src/http/routes/dados-routes.ts | 7 +++++++
|  3 files changed, 18 insertions(+)
* 256a1c5 - ✨ feat: add controller and dados repository - prisma (13 days ago) <Julio Rarick>
| 
|  src/http/controllers/dados/list-all-dados.ts       | 14 ++++++++++++++
|  src/repositories/dados-repository.ts               |  5 +++++
|  src/repositories/prisma/prisma-dados-repository.ts |  9 +++++++++
|  3 files changed, 28 insertions(+)
* a7c4cd3 - ✨ feat: added new use case - list all dados (13 days ago) <Julio Rarick>
| 
|  src/use-cases/factories/make-list-all-dados-use-case.ts |  9 +++++++++
|  src/use-cases/list-all-dados.ts                         | 11 +++++++++++
|  2 files changed, 20 insertions(+)
* 3111cc2 - ✨ feat: add new database schema - Dados and Def (13 days ago) <Julio Rarick>
| 
|  prisma/schema.prisma | 34 ++++++++++++++++++++++++++++++++++
|  1 file changed, 34 insertions(+)
*   8641a23 - Merge branch 'main' into HEAD (5 weeks ago) <Julio Rarick>
|\  
| * b0d5c61 - update packages (5 weeks ago) <Julio Rarick>
| | 
| |  pnpm-lock.yaml | 426 +++++++++++++++++++++++++++--------------------------
| |  1 file changed, 214 insertions(+), 212 deletions(-)
* | d5851a3 - Update README.md (5 weeks ago) <Júlio Rarick Lopes Bogalho>
|/  
|   
|    README.md | 2 +-
|    1 file changed, 1 insertion(+), 1 deletion(-)
* 4d1ad99 - 📝 update README.md (6 weeks ago) <Julio Rarick>
| 
|  README.md                                         | 77 +++++++++++++++++++++
|  .../Create User.bru                               |  0
|  .../Delete User.bru                               |  2 +-
|  .../Get User.bru                                  |  0
|  .../Sign In.bru                                   |  0
|  .../Update User Profile.bru                       |  2 +-
|  .../bruno.json                                    |  0
|  7 files changed, 79 insertions(+), 2 deletions(-)
* a09e595 - 🐛 fix a bug - register user route (6 weeks ago) <Julio Rarick>
| 
|  src/http/routes/users-routes.ts | 2 +-
|  1 file changed, 1 insertion(+), 1 deletion(-)
* 9d0c9d0 - ♻️ refactor: routes in e2e tests - delete and get all users (6 weeks ago) <Julio Rarick>
| 
|  src/http/controllers/users/delete-user-controller.spec.ts   | 2 +-
|  src/http/controllers/users/get-all-users-controller.spec.ts | 2 +-
|  2 files changed, 2 insertions(+), 2 deletions(-)
* 51343b0 - 🧪 create unity tests and e2e ( get all users and delete ) (6 weeks ago) <Julio Rarick>
| 
|  .../users/delete-user-controller.spec.ts          | 45 +++++++++++++++++++
|  .../users/get-all-users-controller.spec.ts        | 37 ++++++++++++++++
|  .../users/update-user-controller.spec.ts          | 48 +++++++++++++++++++++
|  src/http/routes/users-routes.ts                   |  6 +--
|  src/use-cases/delete-user.spec.ts                 | 36 ++++++++++++++++
|  src/use-cases/get-all-users.spec.ts               | 39 +++++++++++++++++
|  src/use-cases/update-user.spec.ts                 | 44 +++++++++++++++++++
|  src/use-cases/update-user.ts                      |  1 -
|  8 files changed, 252 insertions(+), 4 deletions(-)
* 2d9691c - ✨ feat: added new routes and fix a bug (8 weeks ago) <Julio Rarick>
| 
|  node-users-api/Create User.bru                    |  20 ++
|  node-users-api/Delete User.bru                    |  17 ++
|  node-users-api/Get User.bru                       |  22 ++
|  node-users-api/Sign In.bru                        |  18 ++
|  node-users-api/Update User Profile.bru            |  17 ++
|  node-users-api/bruno.json                         |   9 +
|  package.json                                      |   3 +
|  pnpm-lock.yaml                                    | 300 ++++++++++++++++++++
|  src/app.ts                                        |   8 +-
|  .../controllers/users/delete-user-controller.ts   |  24 ++
|  .../controllers/users/update-user-controller.ts   |  30 ++
|  src/http/routes/users-routes.ts                   |   9 +-
|  .../in-memory/in-memory-users-repository.ts       |  16 ++
|  .../prisma/prisma-users-repository.ts             |  18 ++
|  src/repositories/users-repository.ts              |   2 +
|  src/use-cases/authenticate.ts                     |   2 +-
|  src/use-cases/delete-user.ts                      |  10 +
|  .../factories/make-delete-user-use-case.ts        |  10 +
|  .../factories/make-update-user-use-case.ts        |  10 +
|  src/use-cases/update-user.ts                      |  15 +
|  20 files changed, 556 insertions(+), 4 deletions(-)
* 5e5ffa1 - ✨ feat: added fetch all users controller (8 weeks ago) <Julio Rarick>
| 
|  src/http/controllers/users/get-all-users-controller.ts   | 14 ++++++++++++++
|  src/http/routes/users-routes.ts                          |  1 +
|  src/repositories/in-memory/in-memory-users-repository.ts |  4 ++++
|  src/repositories/prisma/prisma-users-repository.ts       |  6 ++++++
|  src/repositories/users-repository.ts                     |  1 +
|  src/use-cases/factories/make-get-all-users-use-case.ts   |  9 +++++++++
|  src/use-cases/get-all-users.ts                           | 10 ++++++++++
|  7 files changed, 45 insertions(+)
* dc567b0 - . (9 weeks ago) <Julio Rarick>
| 
|  docker-compose.yml | 2 +-
|  1 file changed, 1 insertion(+), 1 deletion(-)
* 56162b0 - ✨ feat: alter package and docker compose, default api model (9 weeks ago) <Julio Rarick>
| 
|  .gitignore         | 1 -
|  docker-compose.yml | 4 ++--
|  package.json       | 4 ++--
|  3 files changed, 4 insertions(+), 5 deletions(-)
* ada1e8d - ✅ finally the project, with tests using vitest (9 weeks ago) <Julio Rarick>
| 
|  docker-compose.yml                                | 10 ++++
|  prisma/schema.prisma                              | 30 ++++++++++
|  .../prisma-test-environment.ts                    | 49 ++++++++++++++++
|  src/env/index.ts                                  | 21 +++++++
|  .../users/authenticate-controller.spec.ts         | 31 ++++++++++
|  .../controllers/users/authenticate-controller.ts  | 65 +++++++++++++++++++++
|  .../controllers/users/profile-controller.spec.ts  | 43 ++++++++++++++
|  src/http/controllers/users/profile-controller.ts  | 18 ++++++
|  .../controllers/users/refresh-controller.spec.ts  | 47 +++++++++++++++
|  src/http/controllers/users/refresh-controller.ts  | 39 +++++++++++++
|  .../controllers/users/register-controller.spec.ts | 24 ++++++++
|  src/http/controllers/users/register-controller.ts | 32 ++++++++++
|  src/http/hooks/verify-jwt.ts                      |  9 +++
|  src/http/hooks/verify-user-role.ts                | 10 ++++
|  src/http/routes/users-routes.ts                   | 15 +++++
|  src/lib/prisma.ts                                 |  7 +++
|  src/repositories/users-repository.ts              |  7 +++
|  src/types/faftify-jwt.d.ts                        | 10 ++++
|  src/use-cases/authenticate.spec.ts                | 58 ++++++++++++++++++
|  src/use-cases/authenticate.ts                     | 40 +++++++++++++
|  src/use-cases/error/invalid-credentials-error.ts  |  5 ++
|  src/use-cases/error/resource-not-exists-error.ts  |  5 ++
|  src/use-cases/error/user-already-exists-error.ts  |  5 ++
|  .../factories/make-authenticate-use-case.ts       | 10 ++++
|  .../factories/make-get-user-profile-use-case.ts   | 10 ++++
|  src/use-cases/factories/make-register-use-case.ts | 10 ++++
|  src/use-cases/get-user-metrics.spec.ts            | 31 ++++++++++
|  src/use-cases/get-user-metrics.ts                 | 22 +++++++
|  src/use-cases/get-user-profile.spec.ts            | 40 +++++++++++++
|  src/use-cases/get-user-profile.ts                 | 30 ++++++++++
|  src/use-cases/register.spec.ts                    | 57 ++++++++++++++++++
|  src/use-cases/register.ts                         | 43 ++++++++++++++
|  src/utils/test/register-and-authenticate-user.ts  | 31 ++++++++++
|  vite.config.ts                                    | 14 +++++
|  34 files changed, 878 insertions(+)
* d7178c8 - ✨ feat: added user repository (9 weeks ago) <Julio Rarick>
| 
|  .../in-memory/in-memory-users-repository.ts       | 42 +++++++++++++++++++++
|  .../prisma/prisma-users-repository.ts             | 35 +++++++++++++++++
|  2 files changed, 77 insertions(+)
* 278b7a1 - 🎉 initial commit (9 weeks ago) <Julio Rarick>
  
   .eslintignore                                 |    2 +
   .eslintrc.json                                |    7 +
   .gitignore                                    |    6 +
   package-lock.json                             | 8322 +++++++++++++++++++++++
   package.json                                  |   49 +
   pnpm-lock.yaml                                | 5254 ++++++++++++++
   prisma/vitest-environment-prisma/package.json |    9 +
   src/app.ts                                    |   37 +
   src/server.ts                                 |   11 +
   tsconfig.json                                 |  114 +
   10 files changed, 13811 insertions(+)
