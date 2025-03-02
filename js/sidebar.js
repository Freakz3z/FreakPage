document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const listElement = document.querySelector('img[alt="list"]').parentElement; // 获取 sidebar-element-list 容器
    const weatherElement = document.getElementById("sidebar-element-weather");
    const otherElements = document.querySelectorAll('.sidebar-element:not(#sidebar-element-list)'); // 获取其他 sidebar-element 容器

    // 初始化状态变量
    let isExpanded = false;

    // 只为 List 添加点击事件
    listElement.addEventListener('click', () => {
        if (!isExpanded) {
            sidebar.style.height = '85%';
            
            // 显示其他按钮
            setTimeout(() => {
                otherElements.forEach(element => {
                    element.style.display = 'flex'; // 显示其他按钮
                });
            }, 100);
            
        } else {

            // 隐藏其他按钮
            setTimeout(() => {
                otherElements.forEach(element => {
                    element.style.display = 'none'; // 隐藏其他按钮
                });
            }, 100);

            // 设置 sidebar 高度适应 alt="list"
            sidebar.style.height = '4.3rem';
        }

        // 切换状态
        isExpanded = !isExpanded;

    

    });
});
    
    