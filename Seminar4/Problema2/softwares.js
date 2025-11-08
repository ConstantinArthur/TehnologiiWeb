class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`)
    }
}

class Plugin {
    constructor(name){
        this.name = name;
    }

    activate() {
        console.log(`${this.name} plugin activated`)
    }
}

class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }

    install(plugin) {
        this.plugins.push(plugin);
        console.log(`${plugin.name} installed in ${this.name}`);
    }

    run() {
        super.run();
        this.plugins.forEach(plugin => plugin.activate());
    }
}

const c1 = new Browser("Chrome");
const c2 = new Plugin("AdBlock");
const c3 = new Plugin("DarkMode");

c1.install(c2);
c1.install(c3);
c1.run();