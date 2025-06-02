## Resumen - ## Parte 1 -    GIT (2)

| [X] | 06-007 | Git | Overview of Git Pull | 2025-05-01 |
| --- | --- | --- | --- | --- |
| [X] | 06-009 | Git branches | Introduction to Git Branches | 2025-05-01 |
| [X] | 06-010 | Git | Basic Git Branching Workflow | 2025-05-01 |
| [X] | 06-011 | Git `push` - `merge` | How to Push and Merge a Remote Branch in Git | 2025-05-01 |
| [X] | 06-012 | `git rebase` | Overview of Git Rebase | 2025-05-01 |
| [X] | 06-013 | `git stash` | Overview of Git Stash | 2025-05-01 |
| [X] | 06-014 | `git fetch` - `git pull` | Difference Between Git Fetch and Git Pull | 2025-05-01 |
| [X] | 06-015 |     | How to Delete a Local and Remote Branch in Git | 2025-05-01 |
| [X] | 06-016 |     | A Step by Step Guide for How to Resolve Git Merge Conflicts | 2025-05-01 |
| [X] | 06-017 |     | Reverting to the Latest Commit in Git | 2025-05-01 |
| [X] | 06-018 |     | How to Revert a Single File to a Previous Version in Git | 2025-05-01 |
| [X] | 06-019 |     | Guide to Viewing a Version Commit for a Git Project | 2025-05-01 |
| [X] | 06-020 |     | How to Revert an Entire Project Back to a Previous Version in Git | 2025-05-01 |

---

# Módulo 06-007: Git Pull

### Concepto

`git pull` es un comando que combina dos operaciones:

1. `git fetch`: Descarga los últimos cambios del repositorio remoto
  
2. `git merge`: Fusiona esos cambios con tu rama local
  

### Sintaxis Básica

```bash
git pull origin main
```

### Flujo de Trabajo Recomendado

1. Verificar estado actual: `git status`
  
2. Traer cambios: `git pull origin main`
  
3. Verificar actualizaciones: `git log --oneline -n 3`
  
4. Revisar diferencias: `git diff HEAD~1`
  

### Mejores Prácticas

- **Siempre hacer pull antes de push**: `git pull && git push`
  
- **Sincronizar frecuentemente**: Cada 1-2 horas durante desarrollo activo
  
- **Trabajar en ramas de features**: No directamente en main
  

### Escenarios Comunes

1. **Cambios remotos existen**: Git muestra los archivos actualizados
  
2. **Ramas divergieron**: Tú y el remoto tienen commits diferentes
  
3. **Merge rápido**: Cuando no hay cambios locales
  

---

# Módulo 06-009: Introducción a Ramas

### ¿Qué es una Rama?

- Línea independiente de desarrollo
  
- Aísla trabajo del código principal
  
- Permite desarrollo paralelo
  

### Analogía Visual

```
master: A---B---C
 \
feature: D---E
```

### Beneficios

- Trabajar en features sin afectar la versión estable
  
- Permitir múltiples desarrolladores trabajar simultáneamente
  
- Aislar cambios experimentales
  

### Comandos Clave

```bash
git branch # Listar ramas locales
git checkout -b nueva # Crear y cambiar a nueva rama
git checkout main # Cambiar a rama main
```

---

## Módulo 06-010: Flujo Básico de Ramas

### Pasos del Flujo

1. Crear rama: `git checkout -b feature/nuevo-login`
  
2. Hacer cambios y commits
  
3. Cambiar a main: `git checkout main`
  
4. Fusionar: `git merge feature/nuevo-login`
  
5. Eliminar rama (opcional): `git branch -d feature/nuevo-login`
  

### Tipos de Merge

- **Fast-forward**: Historia lineal (sin nuevos commits)
  
- **Merge commit**: Crea un nuevo commit de fusión
  
- **Conflicto**: Requiere resolución manual
  

### Gestión de Ramas

```bash
git branch -a # Ver todas las ramas (locales y remotas)
git branch -d rama # Eliminar rama local fusionada
git branch -D rama # Forzar eliminación (no fusionada)
```

---

# Módulo 06-011: Push y Merge

### Subir una Rama Nueva

```bash
git push -u origin feature-branch # -u establece upstream
```

### Merge en GitHub (Recomendado)

1. Crear Pull Request (PR) en GitHub
  
2. Revisar cambios
  
3. Aprobar y mergear
  

### Merge Local (Alternativa)

```bash
git checkout main
git pull origin main
git merge feature-branch
git push
```

---

## Módulo 06-012: Rebase

### Concepto

Reorganiza los commits de una rama sobre otra, creando una historia lineal.

### Cuándo Usar

- Incorporar cambios de main a tu feature branch
  
- Limpiar historia antes de mergear
  
- Trabajando en ramas locales
  

### Comandos

```bash
git rebase main # Rebasear tu rama sobre main
git rebase --continue # Continuar después de resolver conflictos
git rebase --abort # Cancelar rebase
```

### Advertencia

Nunca hacer rebase de commits ya compartidos con otros.

---

## Módulo 06-013: Stash

### ¿Qué es?

Guarda temporalmente cambios no commitados para cambiar de contexto.

### Comandos Clave

```bash
git stash # Guardar cambios
git stash list # Listar stashes
git stash apply # Recuperar cambios
git stash drop # Eliminar stash
```

### Ejemplo Práctico

1. Hacer cambios en una rama
  
2. `git stash` para guardarlos
  
3. Cambiar a otra rama para arreglar algo urgente
  
4. Volver y `git stash apply`
  

---

# Módulo 06-014: Fetch vs Pull

### Diferencias

|     | `git fetch` | `git pull` |
| --- | --- | --- |
| **Acción** | Solo descarga cambios | Descarga y fusiona cambios |
| **Seguridad** | Más seguro (permite revisar) | Menos seguro (merge directo) |

### Cuándo Usar Cada Uno

- **Fetch**: Cuando trabajas en equipo o con código crítico
  
- **Pull**: Cuando trabajas solo o en cambios simples
  

---

# Módulo 06-015: Eliminar Ramas

### Eliminar Rama Local

```bash
git branch -d rama-local
```

### Eliminar Rama Remota

```bash
git push origin --delete rama-remota
```

### Buenas Prácticas

- Eliminar ramas después de mergear
  
- Verificar que no haya trabajo pendiente
  
- Asegurarse que todos los cambios están en main
  

---

# Módulo 06-016: Resolver Conflictos de Merge

### Proceso

1. Git marca archivos con conflictos
  
2. Buscar marcadores `<<<<<<<`, `=======`, `>>>>>>>`
  
3. Editar archivos para resolver conflictos
  
4. Marcar como resuelto: `git add archivo`
  
5. Completar merge: `git commit`
  

### Consejos

- Comunicarse con el equipo
  
- Revisar ambos lados del conflicto
  
- Usar herramientas visuales si es necesario
  

---

# Módulo 06-017: Revertir al Último Commit

### Descartar Cambios No Commitados

```bash
git checkout . # Para archivos trackeados
rm archivo # Para archivos no trackeados
```

### Ver Cambios

```bash
git diff # Muestra diferencias con último commit
```

---

# Módulo 06-018: Revertir un Archivo

### Pasos

1. Encontrar hash del commit deseado: `git log`
  
2. Revertir archivo:
  

```bash
git checkout [hash] -- ruta/archivo
```

### Importante

- Crea cambios pendientes que debes commitear
  
- No afecta otros archivos
  

---

# Módulo 06-019: Revisar un Commit

### Investigar un Estado Anterior

```bash
git checkout [hash] -b investigacion
```

- Crea rama temporal para revisar código antiguo
  
- Permite comparar con estado actual
  

### Buenas Prácticas

- Usar ramas temporales para investigación
  
- Eliminar después: `git branch -d investigacion`
  

---

# Módulo 06-020: Revertir Todo el Proyecto

### Reset Hard (Peligroso)

```bash
git reset --hard [hash] (o ~NUMERO DE PASOS)
git push -f origin main
```

### Advertencias

- Reescribe historia del proyecto
  
- Puede causar problemas en equipo
  
- Usar solo en casos extremos y en proyectos personales
  

### Alternativa Más Segura

- Revertir commits específicos con `git revert`

- Usar reset --soft (Sólo hace cambios en el repo local, en el historial, **pero no en los archivos de .git**)
- 
