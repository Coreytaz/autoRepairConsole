# Таблица

# Ипортировать

`import { Table } from "~shared/ui";`

## Подключение

```
  const columns = [
        {
            accessor: "name",
            Header: "NAME",
        },
        {
            accessor: "role",
            Header: "ROLE",
        },
        {
            accessor: "status",
            Header: "STATUS",
        },
    ];
    
    const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            role: "CEO",
            status: "Active",
        },
        {
            key: "2",
            name: "Zoey Lang",
            role: "Technical Lead",
            status: "Paused",
        },
        {
            key: "3",
            name: "Jane Fisher",
            role: "Senior Developer",
            status: "Active",
        },
        {
            key: "4",
            name: "William Howard",
            role: "Community Manager",
            status: "Vacation",
        },
    ];

    <Table columns={columns} data={rows} isPagination pageIndex={0} pageSize={2} isSearch/>
```

## Типы

- **pageIndex?**: number - C какой страницы начало
- **pageSize?**: number - Количество столбцов
- **isSearch?**: boolean - Включение поиска
- **isPagination?**: boolean - Включение страниц
