// Interactive Terminal Animation
class InteractiveTerminal {
    constructor() {
        this.commands = [
            {
                command: 'whoami',
                output: ['Saransh'],
                delay: 1500,
                runOnce: true
            },
            {
                command: 'ifconfig',
                output: [
                    'cscotun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 1390',
                    '        inet 10.188.11.215  netmask 255.255.255.0  destination 10.188.11.215',
                    '        inet6 fe80::ebcc:4cf:8ebe:4abe  prefixlen 64  scopeid 0x20<link>',
                    '        inet6 fe80::44eb:5897:40a4:b8b1  prefixlen 126  scopeid 0x20<link>',
                    '        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 500  (UNSPEC)',
                    '        RX packets 3510  bytes 1859119 (1.8 MB)',
                    '        RX errors 0  dropped 0  overruns 0  frame 0',
                    '        TX packets 3567  bytes 1916861 (1.9 MB)',
                    '        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0',
                    '',
                    'docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500',
                    '        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255',
                    '        inet6 fe80::6004:a5ff:fe27:7122  prefixlen 64  scopeid 0x20<link>',
                    '        ether 62:04:a5:27:71:22  txqueuelen 0  (Ethernet)',
                    '        RX packets 50536  bytes 3326711 (3.3 MB)',
                    '        RX errors 0  dropped 0  overruns 0  frame 0',
                    '        TX packets 91544  bytes 641571436 (641.5 MB)',
                    '        TX errors 0  dropped 187 overruns 0  carrier 0  collisions 0',
                    '',
                    'lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536',
                    '        inet 127.0.0.1  netmask 255.0.0.0',
                    '        inet6 ::1  prefixlen 128  scopeid 0x10<host>',
                    '        loop  txqueuelen 1000  (Local Loopback)',
                    '        RX packets 235385  bytes 133404928 (133.4 MB)',
                    '        RX errors 0  dropped 0  overruns 0  frame 0',
                    '        TX packets 235385  bytes 133404928 (133.4 MB)',
                    '        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0',
                    '',
                    'wlp0s20f3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500',
                    '        inet 192.168.29.218  netmask 255.255.255.0  broadcast 192.168.29.255',
                    '        inet6 fe80::eaaa:da5e:6712:c479  prefixlen 64  scopeid 0x20<link>',
                    '        inet6 2405:201:3004:5129:5ed9:4875:9581:cf4c  prefixlen 64  scopeid 0x0<global>',
                    '        inet6 2405:201:3004:5129:afd9:79e0:2f10:43ed  prefixlen 64  scopeid 0x0<global>',
                    '        ether 04:56:e5:de:b3:72  txqueuelen 1000  (Ethernet)',
                    '        RX packets 8064885  bytes 10137193091 (10.1 GB)',
                    '        RX errors 0  dropped 0  overruns 0  frame 0',
                    '        TX packets 1735127  bytes 1550877425 (1.5 GB)',
                    '        TX errors 0  dropped 190 overruns 0  carrier 0  collisions 0'
                ],
                delay: 2500
            },
            {
                command: 'df -h',
                output: [
                    'Filesystem      Size  Used Avail Use% Mounted on',
                    '/dev/nvme0n1p2  237G  156G   69G  70% /',
                    'tmpfs            16G  2.1M   16G   1% /dev/shm',
                    'tmpfs           6.3G  2.5M  6.3G   1% /run',
                    'tmpfs           5.0M  4.0K  5.0M   1% /run/lock',
                    '/dev/nvme0n1p1  511M  6.1M  505M   2% /boot/efi',
                    'tmpfs           3.2G  140K  3.2G   1% /run/user/1000'
                ],
                delay: 1800
            },
            {
                command: 'curl -I https://devsecopssolution.in',
                output: [
                    'HTTP/2 200',
                    'server: nginx/1.24.0',
                    'date: Mon, 16 Feb 2026 11:23:45 GMT',
                    'content-type: text/html; charset=UTF-8',
                    'content-length: 45678',
                    'last-modified: Mon, 16 Feb 2026 10:15:30 GMT',
                    'etag: "65cf2a42-b26e"',
                    'accept-ranges: bytes',
                    'x-frame-options: SAMEORIGIN',
                    'x-content-type-options: nosniff'
                ],
                delay: 2000,
                success: true
            },
            {
                command: 'kubectl get pods -n production',
                output: [
                    'NAME                                READY   STATUS    RESTARTS   AGE',
                    'devsecopssolution-web-7d8f9c-xyz  1/1     Running   0          12d',
                    'devsecopssolution-api-5b6c8d-abc  1/1     Running   0          12d',
                    'kafka-broker-0                      1/1     Running   0          45d',
                    'redis-master-0                      1/1     Running   0          45d',
                    'postgres-primary-0                  1/1     Running   0          45d'
                ],
                delay: 2200,
                success: true
            },
            {
                command: 'free -h',
                output: [
                    '               total        used        free      shared  buff/cache   available',
                    'Mem:            31Gi        18Gi       2.8Gi       1.2Gi        10Gi        11Gi',
                    'Swap:          2.0Gi       384Mi       1.6Gi'
                ],
                delay: 1600
            },
            {
                command: 'docker ps --format "table {{.Names}}\\t{{.Image}}\\t{{.Status}}\\t{{.Ports}}"',
                output: [
                    'NAMES                    IMAGE                      STATUS          PORTS',
                    'nginx-proxy              nginx:1.24-alpine         Up 12 days      0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp',
                    'redis-cache              redis:7.2-alpine          Up 45 days      0.0.0.0:6379->6379/tcp',
                    'postgres-db              postgres:15.4             Up 45 days      5432/tcp',
                    'prometheus               prom/prometheus:v2.47.0   Up 30 days      9090/tcp',
                    'grafana                  grafana/grafana:10.1.5    Up 30 days      0.0.0.0:3000->3000/tcp'
                ],
                delay: 2000
            },
            {
                command: 'systemctl status nginx',
                output: [
                    '● nginx.service - A high performance web server and a reverse proxy server',
                    '     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)',
                    '     Active: active (running) since Mon 2026-02-03 08:15:22 IST; 1 weeks 6 days ago',
                    '       Docs: man:nginx(8)',
                    '    Process: 1234 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)',
                    '    Process: 1235 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)',
                    '   Main PID: 1236 (nginx)',
                    '      Tasks: 9 (limit: 38297)',
                    '     Memory: 45.2M',
                    '        CPU: 2h 34min 12s',
                    '     CGroup: /system.slice/nginx.service',
                    '             ├─1236 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;',
                    '             └─1237 nginx: worker process'
                ],
                delay: 2200
            },
            {
                command: 'kubectl get nodes -o wide',
                output: [
                    'NAME              STATUS   ROLES           AGE   VERSION   INTERNAL-IP     EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION',
                    'k8s-master-01     Ready    control-plane   90d   v1.28.2   10.188.10.10    <none>        Ubuntu 22.04.3 LTS   5.15.0-91-generic',
                    'k8s-worker-01     Ready    <none>          90d   v1.28.2   10.188.10.11    <none>        Ubuntu 22.04.3 LTS   5.15.0-91-generic',
                    'k8s-worker-02     Ready    <none>          90d   v1.28.2   10.188.10.12    <none>        Ubuntu 22.04.3 LTS   5.15.0-91-generic'
                ],
                delay: 2000,
                success: true
            },
            {
                command: 'netstat -tuln | grep LISTEN',
                output: [
                    'tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN',
                    'tcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN',
                    'tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN',
                    'tcp        0      0 127.0.0.1:3000          0.0.0.0:*               LISTEN',
                    'tcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN',
                    'tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN',
                    'tcp        0      0 127.0.0.1:9090          0.0.0.0:*               LISTEN',
                    'tcp6       0      0 :::80                   :::*                    LISTEN',
                    'tcp6       0      0 :::443                  :::*                    LISTEN',
                    'tcp6       0      0 :::22                   :::*                    LISTEN'
                ],
                delay: 1800
            },
            {
                command: 'helm list -A',
                output: [
                    'NAME                NAMESPACE       REVISION   UPDATED                                 STATUS     CHART                       APP VERSION',
                    'prometheus          monitoring      1          2025-12-15 10:30:45.123456 +0530 IST   deployed   prometheus-25.8.0           v2.47.0',
                    'grafana             monitoring      1          2025-12-15 10:35:22.654321 +0530 IST   deployed   grafana-7.0.8               10.1.5',
                    'nginx-ingress       ingress-nginx   1          2025-11-01 09:15:33.987654 +0530 IST   deployed   ingress-nginx-4.8.3         1.9.4',
                    'cert-manager        cert-manager    1          2025-11-01 09:20:11.456789 +0530 IST   deployed   cert-manager-v1.13.2        v1.13.2'
                ],
                delay: 2000,
                success: true
            }
        ];
        
        this.currentCommandIndex = 0;
        this.terminalContent = document.getElementById('terminal-content');
        this.isTyping = false;
        this.commandsExecuted = new Set(); // Track which commands have been executed
        
        if (this.terminalContent) {
            this.startAnimation();
        }
    }
    
    async startAnimation() {
        // Wait a bit before starting
        await this.sleep(2000);
        
        while (true) {
            const cmd = this.commands[this.currentCommandIndex];
            
            // Skip if command is marked as runOnce and already executed
            if (cmd.runOnce && this.commandsExecuted.has(cmd.command)) {
                this.currentCommandIndex = (this.currentCommandIndex + 1) % this.commands.length;
                continue;
            }
            
            await this.executeCommand(cmd);
            
            // Mark command as executed if it's runOnce
            if (cmd.runOnce) {
                this.commandsExecuted.add(cmd.command);
            }
            
            this.currentCommandIndex = (this.currentCommandIndex + 1) % this.commands.length;
            
            // Wait before next command
            await this.sleep(3000);
            
            // Clear terminal after showing a few commands
            if (this.currentCommandIndex === 0) {
                await this.sleep(2000);
                this.clearTerminal();
                await this.sleep(500);
            }
        }
    }
    
    async executeCommand(cmd) {
        this.isTyping = true;
        
        // Create command line
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `<span class="prompt">saransh@devsecopssolution:~$</span> `;
        
        // Remove cursor from last line
        const cursors = this.terminalContent.querySelectorAll('.cursor');
        cursors.forEach(c => c.remove());
        
        this.terminalContent.appendChild(commandLine);
        
        // Type command character by character
        const commandSpan = document.createElement('span');
        commandSpan.className = 'command';
        commandLine.appendChild(commandSpan);
        
        for (let char of cmd.command) {
            commandSpan.textContent += char;
            await this.sleep(50);
        }
        
        await this.sleep(300);
        
        // Show output
        for (let line of cmd.output) {
            const outputLine = document.createElement('div');
            outputLine.className = cmd.success ? 'terminal-output success' : 'terminal-output';
            outputLine.textContent = line;
            this.terminalContent.appendChild(outputLine);
            await this.sleep(50);
        }
        
        // Add new prompt with cursor
        const newPrompt = document.createElement('div');
        newPrompt.className = 'terminal-line';
        newPrompt.innerHTML = `<span class="prompt">saransh@devsecopssolution:~$</span> <span class="cursor">█</span>`;
        this.terminalContent.appendChild(newPrompt);
        
        // Scroll to bottom
        this.terminalContent.parentElement.scrollTop = this.terminalContent.parentElement.scrollHeight;
        
        this.isTyping = false;
        await this.sleep(cmd.delay);
    }
    
    clearTerminal() {
        this.terminalContent.innerHTML = `
            <div class="terminal-line">
                <span class="prompt">saransh@devsecopssolution:~$</span> <span class="command">clear</span>
            </div>
        `;
        
        setTimeout(() => {
            this.terminalContent.innerHTML = `
                <div class="terminal-line">
                    <span class="prompt">saransh@devsecopssolution:~$</span> <span class="cursor">█</span>
                </div>
            `;
        }, 300);
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveTerminal();
});
