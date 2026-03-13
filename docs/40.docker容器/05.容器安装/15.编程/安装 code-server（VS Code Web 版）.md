## 安装 **code-server（VS Code Web 版）**

最常用也最稳定的办法就是安装 [**code-server**](https://github.com/coder/code-server)，它是 VS Code 的官方开源网页版，在浏览器里访问，就能完全像本地 VS Code 那样使用、编辑服务器上的文件。

------

### 🚀 安装步骤（Debian 12）

1. **更新系统**

   ```
   sudo apt update && sudo apt upgrade -y
   ```

2. **安装必要依赖**

   ```
   sudo apt install -y curl wget tar
   ```

3. **安装 code-server**

   ```
   curl -fsSL https://code-server.dev/install.sh | bash
   ```

   > 这个脚本会自动下载最新版并配置 systemd 服务。

4. **启动服务并开机自启**

   ```
   sudo systemctl enable --now code-server@$USER
   ```

5. **查看配置文件位置**

   ```
   cat ~/.config/code-server/config.yaml
   ```

   默认内容类似：

   ```
   bind-addr: 127.0.0.1:8080
   auth: password
   password: yourpassword
   ```

6. **修改让外部访问** 用编辑器打开：

   ```
   nano ~/.config/code-server/config.yaml
   ```

   改成：

   ```
   bind-addr: 0.0.0.0:8080
   auth: password
   password: 自定义密码
   ```

7. **重启服务生效**

   ```
   sudo systemctl restart code-server@$USER
   ```

8. **在浏览器访问**

   ```
   http://服务器公网IP:8080
   ```

   输入上一步设置的密码，即可进入网页版 VS Code 环境。

------

### 🛠️ 附加配置（可选）

- **SSL 加密访问：** 可使用 Nginx + Let's Encrypt 为你服务器配置 HTTPS 反向代理。
- **自定义端口：** 把 `8080` 改为其它端口，例如 `1965`，避免与其他服务冲突。
- **插件同步：** 登录你的微软或 GitHub 账号，可以在浏览器直接安装 VS Code 插件。