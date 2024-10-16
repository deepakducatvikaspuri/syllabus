### Node js Syllabus

## Introduction
## Modules (export and import)
## Build in Modules (fs, os, path)
# fs
- fs module : used to perform operations regarding file handling
- file Handling/file Input Output Operations:
    1. Creating a new File or Folder
    2. Writing Data into a file
    3. Appending Data into a file
    4. Reading Data from a file
    5. Rename a file
    6. Delete a file
    7. Delete a folder
- synchronous 
- mkdirSync() : used to create a folder
- rmdirSync() :used to delete a folder
- writeFileSync():  create a new file if file doesn't exist, and if file already exist it delete all content of file and re-write data into it
- appendFileSync() : create a new file if file doen't exist, and if file already exist it write data after old data
- readFileSync() read a file and return data  if we not use any encoding then data is return in buffer format to encode use 'utf-8'
- fs.renameSync() : used to rename a file
- unlinkSync() : used to delete a file 
- asynchronous
- mkdir():  used to create a folder, it throw an error is folder exist or Path is Invalid
- rmdir():  used to delete a folder, it throw an error is folder does not exist or Path is Invalid or folder is not Empty
- writeFile():  used to write data into a file, if file doesn't exist is create a new file, and if file already exist, it delete a old data from file and rewrite new data into file
- appendFile(): used to append data into a file, if file doesn't exist is create a new file, and if file already exist, it write new data after old data into file
- readFile(): used to read data from a file, if we not provide encryption it return buffer data so to decrypty provide utf-8
- rename()  :   used to rename a file, it throw an error is file doesn't exist or invalid Path
- unlink()  :   used to delete a file, it throw an error is file doesn't exist or invalid Path

# os
- The node:os module provides operating system-related utility methods and properties
- freemem() return total free memory in RAM 
- totalmem() return total memory in RAM
- os.homedir() return home directory of user
- os.platform() return plateform of os
- os.arch() return Architecture of os
- os.uptime() return time from windows on 
- os.userInfo() return user information
- os.version() return version of OS
- os.cpus() //retur information about processor
- os.release() return os relase version
- os.type() // return the os name by type

# path
- The Path module provides a way of working with directories and file paths.
- __dirname
- __filename
- path.basename(filepath) return the file name with extension
- path.dirname(directorypath) return directory name of any file
- path.extname(filepath) return file extension name
- path.resolve(directoryname, 'filename') return resolve path
- path.isAbsolute(path) return true if path is absolute and false if path is relative;

## creating Server using http module
- var http = require('http');
- http.createServer()
- http.createServer().listen(8080)

## Nodejs routing 
- var url = require('url');
- url.parse(req.url, true).query;
- res.writeHead(200, {'Content-Type': 'text/html'});

## Event Loop
## Express Introduction
## creating server using express
## express routing and request parameters and sending data back to client as well as file
## static website rendering using express
## Template engines (hbs,ejs, pug)
## MongoDB (mongosh, compass, atlas)
## conneting nodejs with mongoDB using mongoose module
## crud
## Blog website
## API 