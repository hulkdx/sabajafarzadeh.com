The reason behind creating a terraform modules is to hide the complexity of creating some of the services, for instance to create a vpc with igw and nat, you need the following code without the modules, you need to create a lot of terraform resources, but with the module it can be just couple lines of code.

I've decided to not use terraform modules because, you really don't know under the hood what kind of resources a module can create and there is not much power of control over changing resources and sometimes have to read the module code to understand what it tries to acheive.
